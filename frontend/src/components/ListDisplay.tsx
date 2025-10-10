interface ListDisplayProps {
  id?: string;
  sourceList: Array<number | string>;
}

export default function ListDisplay({ id, sourceList }: ListDisplayProps) {
  return (
    <ul id={id} className="list-display">
      {sourceList.map((v, i) => (
        <li key={i} className="list-display-item">{v.toString()}</li>
      ))}
    </ul>
  );
}