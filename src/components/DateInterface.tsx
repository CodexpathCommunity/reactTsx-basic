interface DateInterfaceProps {
  date: Date;
}

function DateInterface({ date }: DateInterfaceProps): JSX.Element {
  return (
    <div>
      <p>{date.getDay()}</p>
    </div>
  );
}

export default DateInterface;
