import Bar from '../components/BarComponent';
import Products from '../components/productcard';
import Block1 from '../components/1firstblock';
import Block2 from '../components/block2';
function App() {

  return (
    <div className='body' >
      <Bar/>  
      <Block1/>  
      <div className='flex flex-row justify-center'>
      <Block2/>  
      </div>  
      <img src='bg.png' alt=''/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
