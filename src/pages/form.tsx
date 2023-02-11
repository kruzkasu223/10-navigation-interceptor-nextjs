import { type NextPage } from "next"
import { useMemo, useState } from "react"
import { useNavigationInterceptor } from "../utils"

const initialValue = {
  text: "",
  framework: "Solidjs",
  remember: true,
}

const Form: NextPage = () => {
  const [values, setValues] = useState(initialValue)
  const isValuesChanged = useMemo(
    () =>
      // instead of comparing like this, we should deep compare the object using third-party library
      initialValue.framework !== values.framework ||
      initialValue.remember !== values.remember ||
      initialValue.text !== values.text,
    [values]
  )
  useNavigationInterceptor(isValuesChanged)

  const handleValues = (name: string, value: string | boolean) => {
    setValues((values) => ({ ...values, [name]: value }))
  }

  return (
    <>
      <div className="m-8 text-center">
        <h1 className="text-3xl font-extrabold">Form</h1>
        <h2 className="text-xl font-extrabold">write something...</h2>
        <h2 className="text-xl font-semibold">
          if something is changed, navigation wil be interrupted
        </h2>
        <div className="mt-8 flex flex-col items-center gap-8">
          <input
            type="text"
            name="text"
            value={values.text}
            onChange={(e) => {
              const { name, value } = e.target
              handleValues(name, value)
            }}
            placeholder="Type anything here"
            className="input-bordered input-primary input w-full max-w-xs"
          />
          <select
            name="framework"
            value={values.framework}
            onChange={(e) => {
              const { name, value } = e.target
              handleValues(name, value)
            }}
            className="select-primary select w-full max-w-xs"
          >
            <option disabled>Pick the JS framework</option>
            <option>Reactjs</option>
            <option>Solidjs</option>
            <option>Qwik</option>
            <option>Svelte</option>
            <option>Vue</option>
          </select>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={values.remember}
                onChange={(e) => {
                  const { name, checked } = e.target
                  handleValues(name, checked)
                }}
                className="checkbox-primary checkbox"
              />
              <span className="label-text ml-4 text-left">
                <p>Remember me??</p>
                <p>(I don&apos;t know what to remember though)</p>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
