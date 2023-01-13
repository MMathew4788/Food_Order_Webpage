
const Card = (props) => {
  return <div className="mt-2 p-4 rounded-lg bg-slate-300 max-w-xs md:max-w-4xl mx-auto">
        {props.children}
    </div>;
};
export default Card;
