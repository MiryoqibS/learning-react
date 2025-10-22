import { useEffect } from "react";
import "./App.css"
import { Controller, useForm } from "react-hook-form";
import { CheckIcon } from "lucide-react";

function App() {
  const { register, handleSubmit, formState, reset, watch, control } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      message: "",
      isRead: false,
    }
  });

  const emailWatch = watch("email");
  const isReadWatch = watch("isRead");

  useEffect(() => {
    console.log(emailWatch);
    console.log(`Прочитал: ${isReadWatch}`);
  }, [emailWatch, isReadWatch]);

  // установка значений (с запроса)
  // useEffect(() => {
  //   // представим что пришли данные с сервера
  //   reset({
  //     email: "user@gmail.com",
  //     message: "some message",
  //   })
  // }, [reset])

  const emailRules = {
    required: "This field is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address"
    }
  };

  const messageRules = {
    required: "This field is required",
    minLength: {
      value: 5,
      message: "Message length is less than 5"
    }
  };

  const emailError = formState.errors["email"]?.message;
  const messageError = formState.errors["message"]?.message;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-6  w-full h-full py-6">

      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col gap-4 items-center bg-gray-800 py-10 px-4 rounded-md">
        <h1 className="text-xl text-white">Feedback form</h1>

        <label className="flex flex-col gap-2 w-full">
          <input
            className={`${emailError ? "border-red-500 bg-red-700/5" : "border-purple-700 bg-purple-500/5"} border-2  outline-none py-2 px-4 rounded-md text-white placeholder:text-white w-full`}
            type="email"
            placeholder="Enter e-mail: "
            {...register("email", emailRules)}
          />
          {emailError && (<p className="text-red-500 text-xs text-left">{emailError}</p>)}
        </label>

        <label className="flex flex-col gap-2 w-full">
          <textarea
            className={`${messageError ? "border-red-500 bg-red-700/5" : "border-purple-700 bg-purple-500/5"} border-2 outline-none py-2 px-4 rounded-md text-white placeholder:text-white w-full`}
            placeholder="Enter message: "
            {...register("message", messageRules)}
          />
          {messageError && (<p className="text-red-500 text-xs text-left">{messageError}</p>)}
        </label>

        <Controller
          control={control}
          name="isRead"
          render={({ field: { value, onChange } }) => (
            <label className="flex items-center justify-center gap-2 text-white">
              <button
                type="button"
                className={`flex items-center justify-center w-5 h-5 rounded-sm border-2 
                  ${value ? "bg-green-600 border-green-600" : "bg-white border-gray-400"}`}
                onClick={() => onChange(!value)}
              >
                {!!value && <CheckIcon size={16} />}
              </button>
              I read
            </label>
          )}
        />

        <div className="flex gap-4 items-center justify-center w-full">
          <button
            className="border-2 border-purple-700 bg-purple-500/5 outline-none py-2 px-8 rounded-lg text-white cursor-pointer disabled:bg-gray-800/10 disabled:border-gray-700 disabled:text-gray-500"
            disabled={!formState.isValid}
            type="submit"
          >send</button>
          <button
            className="border-2 border-red-500 bg-red-700/5 outline-none py-2 px-8 rounded-lg text-white cursor-pointer"
            onClick={() => reset()}
            type="button"
          >
            reset
          </button>
        </div>

      </form>

    </div>
  )
}

export default App
