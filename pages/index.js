import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RC Blog Post!</title>
        <meta
          name="description"
          content="A blog post about RC (Remote Control) technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <article className="blog-post">
          <h2>RC Blog Post</h2>
          <p>
            The Australian Capital Territory (ACT) Government has committed to achieving net zero emissions by 2045 (ACT 2019). To help achieve this, a range of policies have been rolled out to encourage ACT residents to purchase electric vehicles (EVs). 
            EVs ‘produce zero tailpipe emissions, helping to improve air quality and reduce greenhouse gas emissions (Potter and Favour 2024).’ Despite this, many people choose not to buy EVs because of concerns about price, the ability to charge the car
            during long trips, the lack of EV options available, and changing government policies (Sinclair et. al. 2020, cited in ACT 2022). Two of the policies the ACT government has introduced are two years of free registration for EVs and an exemption 
              from paying the motor vehicle duty (stamp duty) on newly purchased EVs. These policies aim to make EVs more attractive by lowering the upfront cost of purchasing an EV. 
          </p>
          <p>
          For some, buying an EV is a very simple choice – it’s good for the environment so the cost doesn’t matter. However, for most people cost is one of the biggest factors affecting their choice between an EV and a petrol car.  The costs to consider include: 
          -	The price of the car
          -	stamp duty and registration fees 
          -	the price of fuel or electricity to power the car
          -	servicing and other maintenance costs
          </p>
          <p>
        In the ACT, stamp duty for a car worth less than $45,000 can cost up to $1,910.60 (ACT Revenue Office n.d.). Registration fees (excluding the cost of MIA insurance) can add an extra $600 to the bill. EVs also come with extra upfront costs for anyone looking to
        install solar panels or a home battery to get cheaper electricity. This means that in the short term, EVs can be very expensive. In the longer term, EVs are more cost effective because electricity is cheaper than petrol.  
          </p>
       
          
          
          
          <p>
Since petrol and electric cars can both 
        be used to drive between from point A to point B, in general, people will tend to buy the car that is cheaper. Some other things that can affect the choice between an EV and petrol car are the distance the car can be driven before it needs to be recharged, the availability 
        of charging stations in convenient locations and the aesthetics of the car. For simplicity, if we assume that the long-term costs, driving range, availability of charging/petrol stations and aesthetics of EVs and petrol cars are the same, the main factor affecting the choice 
        between an EV and petrol car is the upfront cost. 
          </p>


]]]
          
          
          <p>
          In general, EVs tend to be more expensive than petrol cars. This is because EVs are only a small portion of the total cars available in Australia (EVC 2023a). Since Australia does not produce cars, EVs need to be imported from international suppliers. 
          The process of getting more EVs is slow and susceptible to the changing preferences of offshore EV manufacturers. The number of EV models available is also limited making it hard to find suitable equivalents to petrol cars at a similar cost. This is where the ACT Government’s policies come in. 

          </p>
          
          <p>
          To make the upfront cost of EVs cheaper, the ACT Government is offering two years of free registration and waiving stamp duty for EVs. These measures will cut roughly $2,500 off the upfront cost of EVs. The free registration for two years also means that the ongoing maintenance costs of an EV will be lower in the second year. 

          </p>

            
          <p>
          The impact of the ACT Government’s policies on consumers can be assessed using a technique known as partial equilibrium analysis. Using data about EV purchases in the ACT over 2023 and forecasts of some key economic parameters, a partial equilibrium model can be built.  

          </p>

            <p>
          Over 2023, 5395 EVs were purchased in the ACT, while the number of petrol car owners fell by 801 (ACT 2024). The EVs were imported from international suppliers who do not have a strong incentive to sell their electric cars in Australia (EVC 2023b). This suggests that 
          EV manufacturers are sensitive to changes in the price of EVs. Similarly, individuals are also price sensitive when considering whether to purchase an EV or a petrol car for the reasons discussed previously. The average price of an EV in the ACT is roughly $40,988. 
          The partial equilibrium analysis shows that the ACT Government’s policies have effectively increased the number of EVs purchased in the ACT. In a scenario with no government policies to lower the upfront cost of EVs, 5004 EVs would be purchased in the ACT with an
          average cost of $43,488. In comparison, the $2,500 reduction in the cost of EVs due to the government’s policies caused the number of EVs purchased to increase by 391. The results also show that the government’s policies improved consumer welfare by $12.99 million 
          and cut out an inefficiency in the economy worth $477,536. One drawback of the policy is that it reduced the ACT Government’s revenue by $12.51 million. 
          </p>



          <p>
The partial equilibrium analysis shows that the ACT Government’s policies have effectively increased the number of EVs purchased in the ACT. In a scenario with no government policies to lower the upfront cost of EVs, 5004 EVs would be purchased in the ACT with an average cost of $43,488. In comparison, the $2,500 reduction in the cost of EVs due to the government’s policies caused the number of EVs purchased to increase by 391. The results also show that the government’s policies improved consumer welfare by $12.99 million and cut out an inefficiency in the economy worth $477,536. One drawback of the policy is that it reduced the ACT Government’s revenue by $12.51 million. 
          </p>


            
          <p>
          In conclusion, EVs will play a crucial role in supporting the ACT Government’s efforts to achieve net zero emissions by 2045. 
          Although the upfront cost of EVs is higher than petrol cars, the partial equilibrium analysis shows that the ACT Government can influence more people in the ACT to buy EVs by reducing costs. This will make consumers better off and improve the efficiency of the economy. 
          Importantly, the government will need to find other sources of revenue to cover the revenue that is lost because of these policies.
          </p>

            
        </article>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Blog</p>
      </footer>

      <Footer />
    </div>
  );
}
