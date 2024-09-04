import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function CommonForm({
  action,
  formControls,
  buttonText,
  isBtnDisabled,
  btnType,
  formData,
  setFormData,
  handleFileChange,
}) {
  function renderInputByComponentType(control) {
    switch (control.componentType) {
      case "input":
        return (
          <div key={control.name} className="relative flex items-center mt-8">
            <Input
              type="text"
              disabled={control.disabled}
              placeholder={control.placeholder}
              name={control.name}
              id={control.name}
              value={formData[control.name] || ""}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border dark:bg-black bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        )

      case "file":
        return (
          <div key={control.name} className="relative flex items-center mt-8">
            <Label
              htmlFor={control.name}
              className="flex bg-gray-100 dark:bg-black items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
            >
              <h2>{control.label}</h2>
              <Input
                onChange={handleFileChange}
                id={control.name}
                type="file"
              />
            </Label>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <form action={action}>
      {formControls.map((control) => renderInputByComponentType(control))}
      <Button
        className="mt-6 disabled:opacity-65"
        type={btnType || "submit"}
        disabled={isBtnDisabled}
      >
        {buttonText}
      </Button>
    </form>
  )
}
