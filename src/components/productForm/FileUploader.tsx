import { FC } from 'react';

interface FileUploaderProps {
  imageFile: File | null;
  fileRef: React.Ref<HTMLInputElement>;
  onInput: () => void;
  imageUrl: string | null;
}

const FileUploader: FC<FileUploaderProps> = ({ imageFile, imageUrl, fileRef, onInput }) => {
  return (
    <div className="file-upload">
      <label htmlFor="image-input">Choose image...</label>
      {imageFile && <span style={{ marginLeft: '15px', color: 'white' }}>{imageFile.name}</span>}
      <input
        data-testid="image-input"
        type="file"
        accept="image/jpeg,image/png,image/gif"
        id="image-input"
        onInput={onInput}
        ref={fileRef}
      />
      <div className="file-upload__image-container">
        {imageUrl && (
          <img id="upload-image" src={URL.createObjectURL(imageFile as File)} alt="Image Preview" />
        )}
      </div>
    </div>
  );
};

export default FileUploader;
