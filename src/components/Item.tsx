import Image from "next/image";

interface ItemProps {
  srcMain: string;
  srcSecond?: string;
  title: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ srcMain, srcSecond, title, price }) => {
  return (
    <div className="item">
      <div className="item-images">
        <img src={srcMain} className="image-1" width="800" height="800" />
        {srcSecond && (
          <img src={srcSecond} className="image-2" width="800" height="800" />
        )}
      </div>
      <p className="item-title">{title}</p>
      <p className="item-price">${price}</p>
    </div>
  );
};

export default Item;
