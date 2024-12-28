import { forwardRef } from "react";

const Input=forwardRef(function Input({ label, isTextarea, ...props },ref) {

    const style="w-full p-1 border-b-2 rounded-sm border-x-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  return (
    <p className="flex flex-col gap2 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {" "}
        {label}{" "}
      </label>
      {isTextarea ? (
        <textarea
          className={style}
          {...props} ref={ref}
        />
      ) : (
        <input className={style} {...props} ref={ref}/>
      )}
    </p>
  );
})
export default  Input;