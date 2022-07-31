import {BsChevronRight} from "react-icons/bs"
export default function Button({text,className}) {
  return (
    <button className={`text-white flex items-center px-16 py-4 rounded-sm ${className} `}>
      {text}
      <BsChevronRight className=" ml-4"/>
    </button>
  );
}
