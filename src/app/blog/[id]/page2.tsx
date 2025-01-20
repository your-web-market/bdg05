import Image from "next/image"
import Link from "next/link"

const blogPost = {
  id: 1,
  title: "Discover the Exciting World of Online Gaming with bdg05",
  content: `
    <p>In recent years, the online gaming industry has experienced exponential growth, providing a challenging and entertaining platform for millions of players worldwide. Among the renowned platforms in this category, bdg05 stands out as an exceptional website offering the best games and countless hours of fun. If you're looking to dive into the world of online gaming, bdg05 is the perfect place to start.</p>

    <h2>Why Choose bdg05?</h2>
    <p>Here's why bdg05 should be your go-to platform for online gaming adventures:</p>
    <ul>
      <li><strong>Wide Range of Games:</strong> Enjoy entertainment from a variety of games across numerous categories, ensuring you're never bored.</li>
      <li><strong>User-Friendly Interface:</strong> With a simple and intuitive design, bdg05's platform caters to players of all experience levels.</li>
      <li><strong>Safe and Secure:</strong> Your security and data privacy are paramount, with all transactions protected by state-of-the-art security measures.</li>
      <li><strong>Regular Updates:</strong> bdg05 consistently provides updates and introduces new games to keep the experience fresh and exciting.</li>
    </ul>

    <h2>How to Register and Sign Up on bdg05</h2>
    <p>Joining the bdg05 gaming community is quick and easy. Follow these simple steps:</p>
    <ol>
      <li>Visit the official bdg05 website.</li>
      <li>Click on the "Register" button.</li>
      <li>Fill in your details, including your name, email address, and mobile number.</li>
      <li>Create a unique username and a strong password.</li>
      <li>Complete the registration by confirming your email or phone number.</li>
    </ol>
    <p>Once registered, you're free to explore the extensive gaming library provided by bdg05.</p>

    <h2>Downloading the bdg05 App</h2>
    <p>To enjoy bdg05 on the go, follow these steps to download our mobile app:</p>
    <ol>
      <li>Visit the official bdg05 website on your mobile device.</li>
      <li>Look for the "Download App" link for your Android or iOS device.</li>
      <li>Follow the on-screen instructions to download and install the app.</li>
    </ol>

    <h2>Exciting Games on bdg05</h2>
    <p>bdg05 offers a wide array of game categories to suit every player's preferences:</p>
    <ul>
      <li><strong>Card Games:</strong> Enjoy classic favorites like poker and rummy.</li>
      <li><strong>Fantasy Sports:</strong> Create your dream team and compete in simulations of real sports leagues.</li>
      <li><strong>Action and Adventure:</strong> Immerse yourself in heart-pounding action games for an adrenaline-fueled experience.</li>
    </ul>

    <h2>What Makes bdg05 the Best Gaming Platform</h2>
    <p>bdg05 has established itself as a top-tier gaming platform with exceptional features:</p>
    <ul>
      <li><strong>Real-Time Gaming Experience:</strong> Compete against players from around the globe in real-time matches.</li>
      <li><strong>Competitions and Tournaments:</strong> Participate in exciting tournaments with the chance to win amazing prizes.</li>
      <li><strong>Social Interaction:</strong> Make new friends, chat with fellow gamers, and climb the leaderboards.</li>
      <li><strong>Rewards and Bonuses:</strong> Enjoy a wealth of rewards, bonuses, and loyalty points as you explore different games.</li>
    </ul>

    <h2>Why bdg05 Stands Out</h2>
    <ul>
      <li><strong>Exceptional Gaming Experience:</strong> Enjoy high-quality graphics and smooth gameplay without lags or freezes.</li>
      <li><strong>Trusted and Reliable:</strong> bdg05 is a secure and trustworthy platform for all your online gaming needs.</li>
      <li><strong>Fair Play and Transparency:</strong> We ensure a level playing field for all users through our commitment to transparency and fair play.</li>
      <li><strong>Global Reach:</strong> Challenge players from around the world to enhance your gaming skills and try new strategies.</li>
    </ul>

    <h2>Join the bdg05 Community Today!</h2>
    <p>Whether you're looking for casual fun or intense competition, bdg05 is your ultimate destination. Register today to experience one of the finest gaming platforms available, and download our app to take your gaming on the go.</p>

    <p>Don't miss out on all the excitement and joy that bdg05 has to offer. Start your online gaming journey now by registering with bdg05, and discover why millions of players consider it one of the best online gaming sites. Get ready for your next gaming adventure!</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  date: "2025-01-20",
  author: "bdg05 Team",
  readTime: "8 min read",
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mt-4 ">{blogPost.title}</h1>
          <div style={{color:'#374151'}} className="flex items-center mt-4 text-sm text-gray-800">
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>{blogPost.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {blogPost.author}</span>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8">
            <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 bdg05. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}




 

// Sample blog post data (in a real application, this would be fetched based on the post ID)
// const blogPost = {
//   id: 1,
//   title: "Getting Started with bdg05",
//   content: `
//     <p>Welcome to bdg05, the exciting platform where gaming meets earning potential! If you're new to bdg05 and wondering how to get started, you've come to the right place. This comprehensive guide will walk you through the process of setting up your account and beginning your journey with bdg05.</p>

//     <h2>Creating Your Account</h2>
//     <p>The first step to joining the bdg05 community is creating your account. Here's how:</p>
//     <ol>
//       <li>Visit the bdg05 website or download the mobile app from your device's app store.</li>
//       <li>Click on the "Register" button.</li>
//       <li>Fill in the required information, including your name, email address, and a secure password.</li>
//       <li>Verify your email address by clicking on the link sent to your inbox.</li>
//       <li>Complete any additional verification steps as prompted.</li>
//     </ol>

//     <h2>Funding Your Account</h2>
//     <p>Once your account is set up, you'll need to add funds to start playing. bdg05 offers various payment options to make this process convenient for you:</p>
//     <ul>
//       <li>UPI</li>
//       <li>Paytm</li>
//       <li>NetBanking</li>
//       <li>Credit/Debit Cards</li>
//     </ul>
//     <p>Choose the method that works best for you and follow the on-screen instructions to add funds to your account.</p>

//     <h2>Exploring Games</h2>
//     <p>bdg05 offers a wide variety of games to suit different preferences. Take some time to explore the available options and find the games that appeal to you. Some popular categories include:</p>
//     <ul>
//       <li>Card Games</li>
//       <li>Slot Machines</li>
//       <li>Sports Betting</li>
//       <li>Skill-based Games</li>
//     </ul>

//     <h2>Understanding the Rules</h2>
//     <p>Before you start playing, it's crucial to understand the rules of each game. bdg05 provides detailed instructions for all games. Take the time to read through these carefully to maximize your chances of success.</p>

//     <h2>Managing Your Bankroll</h2>
//     <p>Responsible gaming is a key aspect of enjoying your time on bdg05. Set a budget for yourself and stick to it. Remember, while bdg05 offers the potential to earn money, it's important to approach it as entertainment rather than a guaranteed income source.</p>

//     <h2>Utilizing Bonuses and Promotions</h2>
//     <p>bdg05 offers various bonuses and promotions to enhance your gaming experience. Keep an eye out for:</p>
//     <ul>
//       <li>Welcome bonuses for new players</li>
//       <li>Daily login rewards</li>
//       <li>Referral bonuses for inviting friends</li>
//       <li>Special event promotions</li>
//     </ul>
//     <p>Make sure to read the terms and conditions associated with each bonus to understand how to best utilize them.</p>

//     <h2>Seeking Support</h2>
//     <p>If you ever have questions or encounter issues while using bdg05, don't hesitate to reach out to our customer support team. They're available 24/7 to assist you with any concerns or queries you may have.</p>

//     <h2>Conclusion</h2>
//     <p>Getting started with bdg05 is an exciting journey into the world of online gaming and earning. By following these steps and approaching your gaming experience responsibly, you'll be well on your way to enjoying all that bdg05 has to offer. Remember to have fun, play responsibly, and may luck be on your side!</p>
//   `,
//   image: "/image5.jpg",
//   date: "2025-01-15",
//   author: "bdg05 Team",
//   readTime: "5 min read",
// }
 