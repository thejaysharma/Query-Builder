export default function ToggleSwitch({ value, onChange }) {
  return (
    <label
      htmlFor="toogleSwitch"
      className="inline-flex items-center rounded cursor-pointer text-white text-sm font-semibold"
    >
      <input
        id="toogleSwitch"
        type="checkbox"
        className="hidden peer"
        checked={value === "OR"}
        onChange={() => onChange(value === "AND" ? "OR" : "AND")}
      />
      <span className="px-4 py-2 rounded-l bg-[#5C61F0] peer-checked:bg-[#404348]">
        AND
      </span>
      <span className="px-4 py-2 rounded-r bg-[#404348] peer-checked:bg-[#5C61F0]">
        OR
      </span>
    </label>
  );
}
