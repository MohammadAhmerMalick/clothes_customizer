export default function ArtItemContainer({ items }) {
  return (
    <div className="art-item-container">
      {items.map((item, index) =>
        <div className="image-container" key={index}>
          <img src={item.link} alt="Content Not Loaded" />
        </div>
      )}
    </div>
  )
}
