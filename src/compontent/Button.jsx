
export default function Button({children,...props}) {
    return <button {...props}className="px-2 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-400 hover:bg-green-800 hover:text-stone-100">
   {children}
    </button>
}