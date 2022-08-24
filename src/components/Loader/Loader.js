import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="grey"
        secondaryColor="blue"
      />
    </div>
  );
}
