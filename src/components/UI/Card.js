
const Card = (props) => {
  return <div className="mt-2 p-4 rounded-lg bg-neutral md:max-w-4xl mx-auto">
        {props.children}
    </div>;
};
export default Card;
