import { useDispatch } from "react-redux";
import ActionBoardTitlebar from "./ActionBoardTitlebar";
import { toolbarAcitveElement } from "../../../redux";
import { useEffect } from "react";
import SearchArtInput from "./SearchArtInput";
import AddArtOptions from "./AddArtOptions";
import { Route } from "react-router-dom";
import ArtLibrary from "./ArtLibrary";
import UnsplashLibrary from "./UnsplashLibrary";

export default function AddArt() {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(toolbarAcitveElement('art-icon')) }, [dispatch])

  return (
    <>
      <ActionBoardTitlebar text="Add Text" />
      <SearchArtInput />
      <Route path="/addArt" exact component={AddArtOptions} />
      <Route path="/addArt/library" component={ArtLibrary} />
      <Route path="/addArt/unsplashLibrary" component={UnsplashLibrary} />
    </>
  )
}
