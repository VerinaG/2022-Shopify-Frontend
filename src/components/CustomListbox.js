import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import "../css/CustomListbox.css";

const engines = [
  { id: 1, engine: "text-curie-001" },
  { id: 2, engine: "text-davinci-002" },
  { id: 3, engine: "text-babbage-001" },
  { id: 4, engine: "text-ada-001" },
];

export default function CustomListBox() {
  const [selected, setSelected] = useState(engines[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label>Assignee:</Listbox.Label>
      <Listbox.Button>
        <span>{selected.engine}</span>
        <span className="icon">
          <SelectorIcon 
             className="h-5 w-5 text-gray-400"
             aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Listbox.Options>
        {engines.map((option) => (
          <Listbox.Option key={option.id} value={option}>
            {option.engine}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
