import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      width={50}
      color="#0059ff"
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '',
      }}
    />
  );
}
