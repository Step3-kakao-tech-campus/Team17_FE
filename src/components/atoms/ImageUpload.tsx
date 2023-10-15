import { useRef, useCallback } from 'react';

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      console.log(e.target.files[0].name);
    },
    [],
  );

  const onUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);
  return (
    <input
      type="file"
      accept="image/*"
      ref={inputRef}
      onChange={onUploadImage}
      onClick={onUploadImageClick}
    ></input>
  );
};
