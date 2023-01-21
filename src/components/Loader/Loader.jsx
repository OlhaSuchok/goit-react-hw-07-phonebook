import { Blocks } from 'react-loader-spinner';

// export default function Loader() {
//   return (
//     <Hearts
//       height="80"
//       width="80"
//       color="#FF4500"
//       ariaLabel="hearts-loading"
//       wrapperStyle={{
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: '15px',
//       }}
//       wrapperClass=""
//       visible={true}
//     />
//   );
// }

export default function Loader() {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
}
