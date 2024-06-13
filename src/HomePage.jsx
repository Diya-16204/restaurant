import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import LikeButton from "./LikeButton";
import { BiBorderRadius } from "react-icons/bi";

function HomePage() {

  let styles={
    color : "white",
  }
  return (
    <div className="main-content">
      <div className="placards1">

      <div className="card">
            <img src="https://i.pinimg.com/564x/c1/56/96/c156967c09b6734fcd9a79f5b9230dd0.jpg" alt="Butter Chicken" />
            <h1 className="name">Butter Chicken</h1>
            <h5 style={styles}>Authentic Indian Butter Chicken.Sauce Made of butter,spices,tomato and garlic-ginger mix with pieces of chicken.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 350</div>
                <div className="rateNew">Rs. 250</div>
                <div className="time">30 - 35 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              <div>59 Ratings</div>
              
            </div>
            <div className="button">
                <button className="b4">Order Now</button>
            </div>
            <div>
            <LikeButton/>
            </div>
        </div>


        <div className="card">
          <img src="https://i.pinimg.com/564x/10/9f/04/109f046d8e41106b9f18797d7d8600ce.jpg" alt="Biryani" />
          <h1 className="name">Biryani</h1>
          <h5 style={styles}>Muradabadi Biriyani is typically prepared in kacchi style,in which raw chicken is cokked along with rice and spices.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 280</div>
                <div className="rateNew">Rs. 220</div>
                <div className="time">40 - 42 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              <div>119 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/20/5f/31/205f31d20f8de04cb4fc1bcd2be8b9a1.jpg" alt="Paneer Tikka" />
          <h1 className="name">Paneer Tikka</h1>
          <h5 style={styles}>An indian dish where the chunks of panner are marinated in spices and rolled over skewers in a tandoor and tossed in masala.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 350</div>
                <div className="rateNew">Rs. 300</div>
                <div className="time">40 - 45 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              <div>56 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/564x/6a/26/59/6a26596d569a3e2dbaf851d14b517f08.jpg" alt="Masala Dosa" />
          <h1 className="name">Masala Dosa</h1>
          <h5 style={styles}>Made with rice,lenticels,potato,methi and curry leaves and served elegantly with chutney and shambhar.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 180</div>
                <div className="rateNew">Rs. 150</div>
                <div className="time">25 - 30 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
              <div>53 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/564x/69/b1/d6/69b1d61a28a154338e2bccd5d03ae054.jpg" alt="Chole Bhature" />
          <h1 className="name">Chole Bhature</h1>
          <h5 style={styles}>The most famous dish of northern india where chana is served with fluffy maida rich bhaturas.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 140</div>
                <div className="rateNew">Rs. 120</div>
                <div className="time">15 - 20 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              <div>39 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/564x/4f/c7/d1/4fc7d15ed913279d26cd3f0b0f35c123.jpg" alt="Tandoori Chicken" />
          <h1 className="name">Tandoori Chicken</h1>
          <h5 style={styles}>The chicken tandoori recipe for soft,juicy kabaabs will simply melt in your mouth.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 350</div>
                <div className="rateNew">Rs. 270</div>
                <div className="time">30 - 35 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
              <div>108 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/564x/4a/2b/1c/4a2b1c79bbc8c35491b6815bdaef4680.jpg" alt="Rogan Josh" />
          <h1 className="name">Rogan Josh</h1>
          <h5 style={styles}>This aromatic curried meat dish originating from kashmir will surely serve your tastebuds in the most elegant manner.</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 350</div>
                <div className="rateNew">Rs. 300</div>
                <div className="time">40 - 45 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
              <div>67 Ratings</div>
              
            </div>
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
            </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/564x/c1/e5/8d/c1e58dc5b850ed2a576a325de6339719.jpg" alt="Palak Paneer" />
          <h1 className="name">Palak Paneer</h1>
          <h5 style={styles}>The thick paste made from pureed spinach, called palak when mixed with everyone's facourite paneer will surely serve as the most special dish of our restaurant</h5>
            <br></br>
            <div className="status1">
                <div className="rateOld">Rs. 280</div>
                <div className="rateNew">Rs. 250</div>
                <div className="time">30 - 35 mins</div>
            </div>
            <div className="status2">
              <div>Ratings:<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
              <div>118 Ratings</div>
              
            </div>
         
          <div className="button">
            <button className="b4">Order Now</button>
          </div>
          <div>
            <LikeButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
