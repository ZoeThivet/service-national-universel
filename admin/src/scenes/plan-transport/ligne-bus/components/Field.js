import React from "react";
import { BiCopy } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { copyToClipboard } from "../../../../utils";

export default function Field({ onChange, value, label, disabled = false, error, readOnly = false, copy, placeholder }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);

  return (
    <div className={`flex flex-col border-[1px] border-gray-300 w-full py-2 px-2.5 rounded-lg ${disabled ? "bg-gray-100" : ""} ${error ? "border-red-500" : ""}`}>
      <label className="text-xs leading-4 text-gray-500">{label}</label>
      <div className="flex items-center gap-2">
        {copy && value && (
          <div
            className="flex items-center justify-center cursor-pointer hover:scale-105"
            onClick={() => {
              copyToClipboard(value);
              setCopied(true);
            }}>
            {copied ? <HiCheckCircle className="h-4 w-4 text-green-500" /> : <BiCopy className="h-4 w-4 text-gray-400" />}
          </div>
        )}
        <input className={`w-full ${disabled ? "bg-gray-100" : ""}`} value={value} onChange={onChange} disabled={disabled} readOnly={readOnly} placeholder={placeholder} />
      </div>
      {error && <div className="text-[#EF4444]">{error}</div>}
    </div>
  );
}
