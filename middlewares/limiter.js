const rateLimit =require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 15  * 1000, // 15 sec
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
module.exports=limiter;