

// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
//     try {
//       const { prompt } = req.body;
  
//       const aiResponse = await openai.createImage({
//         prompt:'',
//         n: 1,
//        size: '1024x1024',
//         response_format: 'b64_json',
//       });
  
//      const image = aiResponse.data.data[0].b64_json;
//       res.status(200).json({ photo: "image" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//     }
//   });

// export default router;
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey:"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"
  //  "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",
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'API endpoint is working' });
});

router.route('/').post(async (req, res) => {
    try {
      const  prompt  = req.body.prompt;
      
    const response = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });
  
    //   const aiResponse = await openai.createImage({
    //     prompt:'an astronaut lounging in a tropical resort in space, vaporwave',
    //     n: 1,
    //     size: '1024x1024',
    //     response_format: 'b64_json',
    //   });
    // const aiResponse = await openai.createImage({
    //     prompt: 'A picture of a dog playing fetch in a park',
    //     n: 1,
    //     size: '1024x1024',
    //     response_format: 'b64_json',
    //   });

    
      
    
        // const data = response.data;
        // res.send(data);
    
  
      const image = response.data.data[0].b64_json;
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
  });

export default router;
