interface DateInterface {
  date: Date;
}

function DateInterface({ date }: DateInterface): JSX.Element {
  return (
    <div>
      <p>{date.getDay()}</p>
    </div>
  );
}

export default DateInterface;
