import Bar from '../components/BarComponent';
import Block1 from '../components/1firstblock';
import Block2 from '../components/block2';
import OurProcess from '../components/ProcessComponent';
function App() {

  return (
    <div className='body' >
      <Bar/>  
      <Block1/>  
      <div className='flex flex-row justify-center'>
      <Block2/>  
      </div>  
      <OurProcess/>
      <img src='bg.png' alt=''/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
