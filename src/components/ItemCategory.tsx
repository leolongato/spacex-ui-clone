import CustomButtom from "./Button";

interface ItemProps {
  srcMain: string;
  title: string;
}

const ItemCategory: React.FC<ItemProps> = ({ srcMain, title }) => {
  return (
    <div className="item-category">
      <img src={srcMain} className="image-category" />
      <div className="items-category-data">
        <p className="item-category-title">{title}</p>
        <CustomButtom title="View Products" color="white" />
      </div>
    </div>
  );
};

export default ItemCategory;
