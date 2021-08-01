import { useSelector } from "react-redux"

export default function ArtItemContainer() {
  const artLibrary = useSelector(state => state.artLibrary)
  
  return (
    <div className="art-item-container">
      {artLibrary.artLibraryRequest &&
        <>
          <span></span>
          <div className="image-container">
            <img src={require('../../../images/loading.gif').default} alt="Loading" />
          </div>
        </>
      }
      {artLibrary.artLibrary.map((item, index) =>
        <div className="image-container" key={index}>
          <img src={item.link} alt="Content Not Loaded" />
        </div>
      )}
    </div>
  )
}
