import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

// Write a function that counts the digit of a number 

  const countDigits = (num) => {
    if(num === 0) return 1;

    let count = 0;
    while(num > 0){
      num = Math.floor(num / 10);
      count++;
    }
    return count;
  }  

  let number = 12345;
  let result = countDigits(number);
  console.log(result);

  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <h1>Welcome</h1>
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
