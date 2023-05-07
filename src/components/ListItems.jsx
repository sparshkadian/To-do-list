import SingleItem from './SingleItem';

function ListItems({ data }) {
  return (
    <div>
      {data.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListItems;
