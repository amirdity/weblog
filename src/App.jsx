import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
