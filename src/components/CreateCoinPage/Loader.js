import "../../css/loader.css"

export function Loader({trigger}) {

  return (
    trigger ? (
    <div className="loader-bg">
      <div className="custom-form-loader"/>
    </div>) : null
  );
}
