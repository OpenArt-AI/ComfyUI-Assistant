export const CATEGORY_COMFY_ACADEMY="Comfy Academy"
export const CATEGORY_TEMPLATE="Templates"
export const categories = [CATEGORY_COMFY_ACADEMY, CATEGORY_TEMPLATE]
export const latestVersion = 1;
export const COURSES = [
    {
        id: '1',
        title: 'Lesson 1: Using ComfyUI, EASY basics - Comfy Academy',
        description: 'In this first Part of the Comfy Academy Series I will show you the basics of the ComfyUI interface. What are Nodes? How to find them? What is the ComfyUI Manager? How to Link Models from Automatic 1111 into ComfyUI? How to connect Nodes? How to create Node Groups? and much more.',
        video_link: 'https://www.youtube.com/watch?v=LNOlk8oz1nY',
        video_embed_link: 'https://www.youtube.com/embed/LNOlk8oz1nY',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT_part_1.jpg',
        workflows: [],
        duration: '15:13',
        timestamps: [
            // { time: 0, title: 'Why ComfyUI?' },
            // { time: 60, title: 'ComfyUI overview' },
            // { time: 90, title: 'ComfyUI Manager Install Instructions' },
            // { time: 150, title: 'How to use ComfyUI Manager' },
            // { time: 275, title: 'Model path setup (recommended if you already use WebUI)' },
            // { time: 350, title: 'ComfyUI nodes' },
            // { time: 420, title: 'KSampler node' },
            // { time: 562, title: 'Reroute node' },
            // { time: 660, title: 'Customize your nodes' },
            // { time: 802, title: 'Group nodes' }
        ]
    },
    {
        id: '2',
        title: 'Lesson 2: Cool Text 2 Image Trick in ComfyUI - Comfy Academy',
        description: 'In this Part of Comfy Academy we build our very first Workflow with simple Text 2 Image. But then I will also show you some cool tricks that use Laten Image Input and also ControlNet to get stunning Results and Variations with the same Image Composition.',
        video_link: 'https://www.youtube.com/watch?v=6kHCE1_LaO0',
        video_embed_link: 'https://www.youtube.com/embed/6kHCE1_LaO0',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT_Part_2.jpg',
        workflows: [
            'j9ZrbVS2QKetKdiLVqmw'
        ],
        duration: '10:43',
        timestamps: [
            // { time: 0, title: 'Build from scratch' },
            // { time: 385, title: 'Add more image output' },
            // { time: 475, title: 'Bonus point - Add ControlNet depth map' }
        ]
    },
    {
        id: '3',
        title: 'Lesson 3: Latent Upscaling in ComfyUI - Comfy Academy',
        description: 'Let\'s explore Latent Upscaling in ComfyUI. It is super easy to do and can greatly improve your image quality. This is also a needed step for many other things like better img2img render, UltimateUpscale or FaceDetailer',
        video_link: 'https://www.youtube.com/watch?v=3W-_B_0F7-g',
        video_embed_link: 'https://www.youtube.com/embed/3W-_B_0F7-g',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT_Part_3.jpg',
        workflows: [
            '8n40kHT7p1krLwCdihdY',
        ],
        duration: '9:23',
        timestamps: []
    },
    {
        id: '4',
        title: 'Lesson 4: Img2Img Painting in ComfyUI - Comfy Academy',
        description: 'Using a very basic painting as a Image Input can be extremely effective to get amazing results. In this Lesson of the Comfy Academy we will look at one of my favorite tricks to get much better AI Images. This gives you control over the color, the composition and the artful expressiveness of your AI Art.',
        video_link: 'https://www.youtube.com/watch?v=179OUihyihk',
        video_embed_link: 'https://www.youtube.com/embed/179OUihyihk',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT_Part_4.jpg',
        workflows: [
            '33ECh584TbdXjPyitkff',
        ],
        duration: '10:40',
        timestamps: []
    },
    {
        id: '5',
        title: 'Lesson5: Magical Img2Img Render + WD14 in ComfyUI - Comfy Academy',
        description: 'I built a magical Img2Img workflow for you. In the first workflow, we explore the benefits of Image-to-Image rendering and how it can help you generate amazing AI images. In the second workflow, I created a magical Image-to-Image workflow for you that uses WD14 to automatically generate the prompt from the image input. This is fantastic!',
        video_link: 'https://www.youtube.com/watch?v=xP4KJ4_SxX8',
        video_embed_link: 'https://www.youtube.com/embed/xP4KJ4_SxX8',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT_Part_5.jpg',
        workflows: [
            'TfVDgqk4JpLubTKOIoHJ',
        ],
        duration: '10:09',
        timestamps: []
    },
    {
        id: '6',
        title: 'Lesson 6: Model Switch and Masking in ComfyUI - Comfy Academy',
        description: 'Model Switching is one of my favorite tricks with AI. We render an AI image first in one model and then render it again with Image-to-Image in a different model. This allows us to use the colors, composition, and expressiveness of the first model but apply the style of the second model to our image. \n' +
            'Then we also explore Image Masking for inpainting in Comfyui, a hidden gem that is very effective.',
        video_link: 'https://www.youtube.com/watch?v=IO4DB2hsUf8',
        video_embed_link: 'https://www.youtube.com/embed/IO4DB2hsUf8',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%206.jpg',
        workflows: [
            'mVvngwUewT8Tfqs727YH',
        ],
        duration: '8:12',
        timestamps: []
    },
    {
        id: '7',
        title: 'Lesson 7: Live Model Merge in ComfyUI - Comfy Academy',
        description: 'Live Model Merge in ComfyUI is highly effective. It allows you to use several Models at the same time and set the Ratio between them for the Model and the Clip. This is done WITHOUT creating a Model Merge File. So you save a lot of harddrive space and can experiment with model merges at any time.',
        video_link: 'https://www.youtube.com/watch?v=wcoopBBhUrw',
        video_embed_link: 'https://www.youtube.com/embed/wcoopBBhUrw',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%207.jpg',
        workflows: [
            'shuGYFYatsb2M8nwNi6e',
        ],
        duration: '7:17',
        timestamps: []
    },
    {
        id: '8',
        title: 'Lesson 8: Loras in ComfyUI - Comfy Academy',
        description: 'Let\'s learn how to use Loras in ComfyUi. Loras is a very effective way to create more styles and better images with the models you have. You can use Loras to create various styles, including specific clothing styles, actions, faces, and colors. You can even add more details to the image and get better skin details in your AI image.',
        video_link: 'https://www.youtube.com/watch?v=dJx0tuEbxAY',
        video_embed_link: 'https://www.youtube.com/embed/dJx0tuEbxAY',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%208.jpg',
        workflows: [
            'ik3X9D92bcpouZEgScfB',
        ],
        duration: '11:19',
        timestamps: []
    },
    {
        id: '9',
        title: 'Lesson 9: ControlNet in ComfyUI - ComfyUI Academy',
        description: 'ControlNet in ComfyUI is very powerful. In this lesson, you will learn how to use ControlNet. You will learn about different ways to preprocess the images. I will show you how to apply different weights to the ControlNet and apply it only partially to your rendering steps. Create much better AI images with ControlNet in ComfyUI.',
        video_link: 'https://www.youtube.com/watch?v=zdiFAgdgtjg',
        video_embed_link: 'https://www.youtube.com/embed/zdiFAgdgtjg',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%209.jpg',
        workflows: [
            'eWSkFEeLjJ33zfCulBQs',
        ],
        duration: '13:42',
        timestamps: []
    },
    {
        id: '10',
        title: 'Lesson 10: UltimateUpscaler in ComfyUI - Comfy Academy',
        description: 'Ultimate Upscaler is the best way to create highly detailed Upscales in ComfyUI. In this video we will explore how to use UltimateUpscaler. Learn about different Upscale Models and their benefits. Create the best Upscales you have ever made with this Tutorial',
        video_link: 'https://www.youtube.com/watch?v=gk6MLF09XjY',
        video_embed_link: 'https://www.youtube.com/embed/gk6MLF09XjY',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%2010.jpg',
        workflows: [
            'DPi9F7xpDnDYVGulvKCq',
        ],
        duration: '11:40',
        timestamps: []
    },
    {
        id: '11',
        title: 'Lesson 11: Facedetailer in ComfyUI - Comfy Academy',
        description: 'In this Part of Comfy Academy we check out the FaceDetailer Node. This can be used with any kind of Face in AI image generation. However it is especially effective with small faces in images, as they can often be deformed or lack detail. This can also be used to just export the face mask and use it in other creative ways.',
        video_link: 'https://www.youtube.com/watch?v=AnKnBKG2avE',
        video_embed_link: 'https://www.youtube.com/embed/AnKnBKG2avE',
        thumbnail_url: 'https://cdn.openart.ai/comfyui_academy/YT%2011.jpg',
        workflows: [
            'yX7UGJvOMSYBPUrMzL7r',
        ],
        duration: '8:25',
        timestamps: []
    },
];
export const TEMPLATES = [{"id":"lkOtNJ2UexVd6vK0kYhd",
    "creator":{"uid":"4pYEgRw3JXVFu5elJKeR","bio":"","username":"openart","name":"OpenArt","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},
    "updated_at":{"_seconds":1671396844,"_nanoseconds":977000000},
    "stats":{"num_comments":0,"num_shares":0,"rating":5,"num_runs":0,"num_bookmarks":0,"num_reviews":1,"num_likes":11,"num_downloads":1631,"num_views":8075},
    "nodes_index":["Note",".","ComfyUI","CLIPTextEncode","VAEDecode","SaveImage","EmptyLatentImage","KSampler","CheckpointLoaderSimple",","],
    "name":"Basic SD1.5 Workflow ",
    "description":"<h3>What this workflow does</h3><p>This workflow simply </p><ul><li>loads a model</li><li>allows you to enter positive negative prompt</li><li>allows you to adjust basic configurations like seeds, steps etc</li></ul><p>and generates an image.</p><p><br></p><h3>How to use this workflow</h3><p>Use this workflow only if you are sure the base checkpoint embeds a good quality VAE, otherwise check out another this workflow with VAE - &nbsp;<a href=\"https://openart.ai/workflows/openart/basic-sd15-workflow-with-vae/XlPv7Qz9U3wOIDn5vSxM\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sd15-workflow-with-vae/XlPv7Qz9U3wOIDn5vSxM.</a></p>",
    "created_at":{"_seconds":1671396844,"_nanoseconds":790000000},
    "categories":[],
    "thumbnails":[{"width":960,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_OOJIcZFT_1702943704029_raw.jpg","height":960},{"width":2662,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_T1vSgAYq_1702943704333_raw.jpg","height":1530}],
    "nodes_count":{"total":9,"primitive":2,"custom":7}},{"id":"XlPv7Qz9U3wOIDn5vSxM","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1705490941,"_nanoseconds":409000000},"stats":{"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_comments":1,"num_likes":8,"num_downloads":1186,"num_views":4578},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","VAEDecode","SaveImage","EmptyLatentImage","KSampler","CheckpointLoaderSimple","VAELoader",","],"name":"Basic SD1.5 + VAE Workflow","description":"<h3>What this workflow does</h3><p>This workflow adds an external VAE on top of the basic text-to-image workflow ( <a href=\"https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd</a>). The VAE model is responsible of converting the latent image into the pixel space. The process is \"lossy\" and a good VAE model is essential to get good quality images.</p><h3>How to use this workflow</h3><p>This one workflow uses a default good VAE but there are more. Check out the description on Huggingface or CivitAI if the author suggests a specific VAE.</p>","created_at":{"_seconds":1671397200,"_nanoseconds":737000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/webp_3C6Rr-LO_1702933751971_raw.webp","height":1024},{"width":2620,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_i-o0SHeN_1702933984215_raw.jpg","height":1660}],"nodes_count":{"total":11,"primitive":3,"custom":8}},{"id":"7YARVB8mANBPGbzqpWfV","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671397911,"_nanoseconds":49000000},"stats":{"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_comments":1,"num_likes":12,"num_downloads":1369,"num_views":6916},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","VAEDecode","SaveImage","EmptyLatentImage","VAELoader","KSampler","CheckpointLoaderSimple","LoraLoader",","],"name":"Basic LoRA Workflow","description":"<h3>What this workflow does</h3><p>This workflow loads an additional LoRA on top of the base model. </p><p><br></p><h3>How to use this workflow</h3><p>** LORAs can be daisy-chained! You can have as many as you want **</p>","created_at":{"_seconds":1671397911,"_nanoseconds":900000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/webp_v5L3bGqX_1702941891063_raw.webp","height":1024}],"nodes_count":{"total":10,"primitive":1,"custom":9}},{"id":"qijtHYoTK3jG7grl0Mub","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671398400,"_nanoseconds":796000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":2,"num_downloads":665,"num_views":2314},"nodes_index":["Note",".","ComfyUI","VAEDecode","SaveImage","ImageScale","CLIPTextEncode","VAEEncode","RepeatLatentBatch","LoadImage","CheckpointLoaderSimple","KSampler",","],"name":"Basic SD 1.5 Img2img Workflow","description":"<p>This is a basic img2img workflow. You can upload a reference image and a prompt to guide the image generation.</p><p>By default, it generates 4 images based on 1 reference image, but you can bypass or remove the Repeat Latent Batch node to generate just 1 image.</p>","created_at":{"_seconds":1671398400,"_nanoseconds":588000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_RYWWTOHy_1704183475455_raw.jpg","height":1024},{"width":3194,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_c3hZ3YG1_1704183518395_raw.jpg","height":1630}],"nodes_count":{"total":13,"primitive":3,"custom":10}},{"id":"YibsziaM9wW4Oze1iDwP","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671399000,"_nanoseconds":424000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":1,"num_downloads":929,"num_views":3184},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","EmptyLatentImage","CheckpointLoaderSimple","KSampler","VAELoader","VAEDecode","PreviewImage","SaveImage","LatentFromBatch",","],"name":"Batch Generation Workflow","description":"<h3>What this workflow does</h3><p>This workflow can batch generate images instead of one at at time, by using the Latent From Batch node. It helps get more results at a time.</p><p><br></p><h3>How to use this workflow</h3><p>You can change the batch index to tweak the number of generations.</p>","created_at":{"_seconds":1671399000,"_nanoseconds":578000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_qmd3m0_k_1702943062775_raw.jpg","height":1024},{"width":3026,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_70ykMqSb_1702943063753_raw.jpg","height":1652}],"nodes_count":{"total":12,"primitive":1,"custom":11}},{"id":"S6PuWxBpXPB9PxSMhgUb","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671399600,"_nanoseconds":439000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_likes":0,"num_bookmarks":0,"num_downloads":546,"num_views":2395},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","VAEDecode","SaveImage","EmptyLatentImage","VAELoader","KSampler","CheckpointLoaderSimple","CLIPSetLastLayer",","],"name":"Clip Skip Workflow","description":"<p>This workflow allows you to skip some of the layers of the CLIP model when generating images. This can be useful for getting more creative results, as the CLIP model can sometimes be too specific in its descriptions.</p>","created_at":{"_seconds":1671399600,"_nanoseconds":951000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_8v6AdCia_1703246910524_raw.jpg","height":1024},{"width":3402,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_io5Y2QnI_1703246911529_raw.jpg","height":1678}],"nodes_count":{"total":10,"primitive":1,"custom":9}},{"id":"VSXSMBLJzsoy0Jb8qLIV","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671400200,"_nanoseconds":806000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":4,"num_downloads":840,"num_views":2909},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","CheckpointLoaderSimple","EmptyLatentImage","KSampler","VAELoader","VAEDecode","PreviewImage","SaveImage",","],"name":"Basic Second-Pass Workflow","description":"<h3>What this workflow does</h3><p>This workflow applies a second pass &nbsp;of KSampler on top of this basic SD 1.5 workflow with an external VAE ( &nbsp;<a href=\"https://openart.ai/workflows/openart/basic-sd15-workflow-with-vae/XlPv7Qz9U3wOIDn5vSxM\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sd15-workflow-with-vae/XlPv7Qz9U3wOIDn5vSxM</a>). Even at the same resolution (ie: without upscaling), the second pass can increase definition and fix small mistakes.</p><p><br></p><h3>How to use this workflow</h3><p>Increasing the DENOISE adds more details but also changes the original reference more (the first pass).</p><p><br></p>","created_at":{"_seconds":1671400200,"_nanoseconds":838000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_jRx2H_U5_1702943992821_raw.jpg","height":1024},{"width":2902,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_SGURCDTB_1702943994027_raw.jpg","height":1564}],"nodes_count":{"total":12,"primitive":1,"custom":11}},{"id":"Sb5QYi1ulD0syTUWNZHw","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671400800,"_nanoseconds":572000000},"stats":{"num_shares":0,"num_runs":0,"num_bookmarks":0,"num_comments":1,"rating":4,"num_reviews":2,"num_likes":7,"num_views":4277,"num_downloads":1326},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","CheckpointLoaderSimple","KSampler","VAEDecode","SaveImage","VAELoader","LoadImage","VAEEncodeForInpaint",","],"name":"Basic Inpainting Workflow","description":"<p>This inpainting workflows allow you to edit a specific part in the image. Right click the image, select the Mask Editor and mask the area that you want to change. The grow mask option is important and needs to be calibrated based on the subject.</p><p>In this example we're applying a second pass with low denoise to increase the details and merge everything together.</p>","created_at":{"_seconds":1671400800,"_nanoseconds":920000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_sDsn1iWt_1703246015468_raw.jpg","height":1024},{"width":3282,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_pNgw9yvC_1703246016572_raw.jpg","height":1736}],"nodes_count":{"total":14,"primitive":4,"custom":10}},{"id":"4UymtsV7TcfpZPHPgIpd","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671401400,"_nanoseconds":622000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":3,"num_downloads":569,"num_views":4176},"nodes_index":["Reroute","Note",".","ComfyUI","CLIPTextEncode","VAELoader","KSampler","VAEDecode","ImagePadForOutpaint","CheckpointLoaderSimple","PreviewImage","VAEEncodeForInpaint","EmptyLatentImage",","],"name":"Basic Outpainting Workflow","description":"<p>In this workflow, the first half of the workflow just generates an image that will be outpainted later. You can replace the first with an image import node.</p><p>In the second half othe workflow, all you need to do for outpainting is to pad the image with the \"Pad Image for Outpainting\" node in the direction you wish to add. Note that it's still technically an \"inpainting\" process, so you need to use an inpainting checkpoint and the \"VAE Encode (for inpainting)\" node.</p>","created_at":{"_seconds":1671401400,"_nanoseconds":823000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_2xx-i5SI_1704184168022_raw.jpg","height":1024},{"width":3258,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_xDFw9YQO_1704184171763_raw.jpg","height":1394}],"nodes_count":{"total":19,"primitive":5,"custom":14}},{"id":"aO8mb2DFYJlyr7agH7p9","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671402000,"_nanoseconds":214000000},"stats":{"num_shares":0,"rating":5,"num_runs":0,"num_bookmarks":0,"num_reviews":1,"num_comments":1,"num_likes":5,"num_downloads":447,"num_views":1440},"nodes_index":["Reroute","Note",".","ComfyUI","CLIPTextEncode","VAEDecode","EmptyLatentImage","SolidMask","FeatherMask","PreviewImage","KSampler","MaskComposite","MaskToImage","SetLatentNoiseMask","ImagePadForOutpaint","SaveImage","VAELoader","VAEEncodeForInpaint","CheckpointLoaderSimple",","],"name":"Outpainting With Seam Fix","description":"<p>When outpainting it happens to get a noticeable seam line between the two pieces. This workflow applies a low denoise second pass over the outpainted image to fix any glitch.</p>","created_at":{"_seconds":1671402000,"_nanoseconds":523000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_VraAqcdy_1704185036207_raw.jpg","height":1024},{"width":3316,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_5gWQrT5v_1704185041158_raw.jpg","height":1630}],"nodes_count":{"total":30,"primitive":7,"custom":23}},{"id":"tOYu3yw8kSXxA1gB96Db","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671404400,"_nanoseconds":77000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":4,"num_downloads":559,"num_views":5962},"nodes_index":["Note",".","ComfyUI","EmptyLatentImage","VAEDecode","CLIPTextEncode","KSampler","SaveImage","CheckpointLoaderSimple",","],"name":"Ultra Basic SDXL Workflow (Not Recommended)","description":"<h3>What this workflow does</h3><p>This is essentially the same as the basic workflow for SD 1.5 ( <a href=\"https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd</a> ), but it's not optimized for SDXL. We include it here for the demo purpose.</p><p>We highly recommend you to use another basic SDXL workflows - &nbsp;<a href=\"https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO</a> which includes ClipTextEncodeSDXL for better image quality results.</p>","created_at":{"_seconds":1671404400,"_nanoseconds":591000000},"categories":[],"thumbnails":[{"width":768,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_4BaFHbOX_1702943833144_raw.jpg","height":768},{"width":2744,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_DJNqO6SF_1702943833773_raw.jpg","height":1606}],"nodes_count":{"total":9,"primitive":2,"custom":7}},{"id":"P8VEtDSQGYf4pOugtnvO","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671405000,"_nanoseconds":612000000},"stats":{"num_comments":0,"num_shares":0,"num_runs":0,"num_bookmarks":0,"num_reviews":1,"rating":5,"num_likes":4,"num_downloads":1699,"num_views":7115},"nodes_index":["Note","PrimitiveNode",".","ComfyUI","CheckpointLoaderSimple","CLIPTextEncodeSDXL","KSampler","EmptyLatentImage","VAEDecode","SaveImage",","],"name":"Basic SDXL Workflow","description":"<h3>What this workflow does</h3><p>This basic workflow runs the base SDXL model with some optimization for SDXL. This can be useful for systems with limited resources as the refiner takes another 6GB or ram.</p><h3>How to use this workflow</h3><p>If your model is based on SD 1.5, use this basic workflow instead - &nbsp;<a href=\"https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sd15-workflow/lkOtNJ2UexVd6vK0kYhd.</a></p><p><br></p>","created_at":{"_seconds":1671405000,"_nanoseconds":45000000},"categories":["SDXL"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/webp_3jwAAwSV_1702934538301_raw.webp","height":1024},{"width":2654,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_BGDwCWgb_1702935094644_raw.jpg","height":1544}],"nodes_count":{"total":13,"primitive":6,"custom":7}},{"id":"Q6n55PcgIumjDRoPmPHX","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671405600,"_nanoseconds":246000000},"stats":{"num_comments":0,"num_shares":0,"num_runs":0,"num_bookmarks":0,"rating":3,"num_reviews":1,"num_likes":7,"num_downloads":1696,"num_views":6711},"nodes_index":["Note","PrimitiveNode",".","ComfyUI","CheckpointLoaderSimple","EmptyLatentImage","CLIPTextEncodeSDXL","VAEDecode","SaveImage","VAELoader","CLIPTextEncodeSDXLRefiner","KSamplerAdvanced",","],"name":"Basic SDXL + Refiner Workflow","description":"<h3>What this workflow does</h3><p>This workflow adds a refiner model on topic of the basic SDXL workflow ( <a href=\"https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO</a> ).</p><p>The core of the composition is created by the base SDXL model and the refiner takes care of the minutiae. The refiner helps improve the quality of the generated image.</p>","created_at":{"_seconds":1671405600,"_nanoseconds":923000000},"categories":["SDXL"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_zQVjBhMQ_1704182787567_raw.jpg","height":1024},{"width":2662,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_0IHo0xiZ_1704182789124_raw.jpg","height":1402}],"nodes_count":{"total":22,"primitive":10,"custom":12}},{"id":"yrUf3Yj2kqSHVbZsS9vy","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671406200,"_nanoseconds":206000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":9,"num_views":6538,"num_downloads":1574},"nodes_index":["PrimitiveNode","Note",".","ComfyUI","VAEDecode","KSampler","CLIPTextEncodeSDXL","ImageScale","LoadImage","CheckpointLoaderSimple","VAELoader","VAEEncode","SaveImage",","],"name":"Basic SDXL Img2Img Workflow","description":"<p>This is a basic img2img workflow on top of our basic SDXL workflow ( <a href=\"https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO\" target=\"_blank\">https://openart.ai/workflows/openart/basic-sdxl-workflow/P8VEtDSQGYf4pOugtnvO</a> ). Instead of starting with a random latent image, the workflow will start with a user-uploaded image.</p>","created_at":{"_seconds":1671406200,"_nanoseconds":253000000},"categories":["SDXL"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_skZX6-ue_1703244597599_raw.jpg","height":1024},{"width":3228,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_GbcOxaL6_1703244598402_raw.jpg","height":1710}],"nodes_count":{"total":15,"primitive":5,"custom":10}},{"id":"REGMkdFKDcRg4RkpMzvG","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671408000,"_nanoseconds":294000000},"stats":{"num_shares":0,"rating":5,"num_runs":0,"num_bookmarks":0,"num_comments":1,"num_reviews":1,"num_likes":13,"num_downloads":1494,"num_views":14772},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","EmptyLatentImage","KSampler","VAELoader","VAEEncode","VAEDecode","SaveImage","ImageScaleBy","PreviewImage","CheckpointLoaderSimple",","],"name":"Pixel Upscale Workflow","description":"<h3>What this workflow does</h3><p>This is the simplest and probably less expensive method to upscale an image on the pixel level. A lanczos algorithm is used in the pixel space to upscale the image and then a second pass applied to it.</p><p>It needs a relatively high denoise which means the final image will be a little different from the source.</p>","created_at":{"_seconds":1671408000,"_nanoseconds":124000000},"categories":[],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/webp_dq9KHLx1_1702944090473_raw.webp","height":1024},{"width":3152,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_E0ZP2RF-_1702944790937_raw.jpg","height":1644}],"nodes_count":{"total":14,"primitive":1,"custom":13}},{"id":"V6horzh1YQN8Pz5rJXzP","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671408600,"_nanoseconds":974000000},"stats":{"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":1,"num_comments":1,"num_downloads":1104,"num_views":5674},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","EmptyLatentImage","CheckpointLoaderSimple","KSampler","VAEDecode","SaveImage","VAELoader","PreviewImage","ImageUpscaleWithModel","UpscaleModelLoader","ImageScaleBy","VAEEncode",","],"name":"Model-based Pixel Upscale Workflow","description":"<h3>What this workflow does</h3><p>This workflows loads an existing upscaling model that takes care of the upscaling phase. It's more effective but more expensive than our basic image upscaling workflow ( <a href=\"https://openart.ai/workflows/openart/basic-image-upscale-workflow/REGMkdFKDcRg4RkpMzvG\" target=\"_blank\">https://openart.ai/workflows/openart/basic-image-upscale-workflow/REGMkdFKDcRg4RkpMzvG</a> ).</p><p>The second pass is performed to add back some sharpness to the image but can be done at a very low denoise.</p><p><br></p>","created_at":{"_seconds":1671408600,"_nanoseconds":359000000},"categories":["Upscale"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_bDYqWOlI_1702944965033_raw.jpg","height":1024},{"width":3150,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_iouku_Mq_1702945183859_raw.jpg","height":1772}],"nodes_count":{"total":16,"primitive":1,"custom":15}},{"id":"evHHfZAR0ihgLJlPc4Eu","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_1024.jpg","username":"openart"},"updated_at":{"_seconds":1671409200,"_nanoseconds":403000000},"stats":{"num_comments":0,"num_shares":0,"rating":5,"num_reviews":0,"num_runs":0,"num_bookmarks":0,"num_likes":1,"num_downloads":521,"num_views":4125},"nodes_index":["Note",".","ComfyUI","CLIPTextEncode","EmptyLatentImage","VAELoader","SaveImage","VAEDecode","PreviewImage","CheckpointLoaderSimple","KSampler","LatentUpscaleBy",","],"name":"Latent Upscale Workflow","description":"<p>The latent can be upscaled directly but the loss in quality is important. That means that the second pass after the upscale has to be done at a very high denoise (0.55+).</p><p>This option is offered as it's very inexpensive computationally and it can be useful if you don't need the final image to be 100% of the initial generation.</p><p>If the final image can be rather different from the first pass, you should use latent upscale as it's faster and very light computationally.</p>","created_at":{"_seconds":1671409200,"_nanoseconds":933000000},"categories":["Upscale"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_yiC2Eo7L_1704182268845_raw.jpg","height":1024},{"width":2958,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_GN_Yjfa5_1704182271315_raw.jpg","height":1608}],"nodes_count":{"total":14,"primitive":2,"custom":12}},{"id":"8H0mGG5dOFQCuslp2qQv","creator":{"uid":"4pYEgRw3JXVFu5elJKeR","name":"OpenArt","bio":"","username":"openart","avatar":"https://cdn.openart.ai/uploads/image_vmS7sTuQ_1703026397814_256.jpg"},"updated_at":{"_seconds":1671415200,"_nanoseconds":788000000},"stats":{"num_shares":0,"num_runs":0,"num_bookmarks":0,"rating":3,"num_reviews":1,"num_comments":1,"num_likes":17,"num_downloads":1864,"num_views":7213},"nodes_index":["Note",".","ComfyUI","EmptyLatentImage","CLIPTextEncode","VAEDecode","VAELoader","SaveImage","LoadImage","KSampler","CLIPVisionLoader","CheckpointLoaderSimple",",","ComfyUI_IPAdapter_plus","IPAdapterApply","IPAdapterModelLoader",","],"name":"Basic IPAdapter","description":"<h3>What this workflow does</h3><p>This workflows is a very simple workflow to use IPAdapter IP-Adapter is an effective and lightweight adapter to achieve image prompt capability for stable diffusion models.</p><p><br></p><h3>How to use this workflow</h3><p>The IPAdapter model has to match the CLIP vision encoder and of course the main checkpoint. All SD15 models and all models ending with \"vit-h\" use the SD15 CLIP vision. One of the SDXL models and all models ending with \"vit-g\" use the SDXL CLIP vision.</p><p>PLUS models use more tokens and are stronger. LIGHT models have a very light impact. FACE and FULL-FACE are only to describe faces (they are not face swap!)</p>","created_at":{"_seconds":1671415200,"_nanoseconds":93000000},"categories":["IP-Adapter"],"thumbnails":[{"width":1024,"url":"https://cdn.openart.ai/workflow_thumbnails/4pYEgRw3JXVFu5elJKeR/image_KdBztP1T_1702945457521_raw.jpg","height":1024}],"nodes_count":{"total":13,"primitive":1,"custom":12}}]
export const modules = [
    // Comfy Academy
    ...COURSES.map(course => ({
        title: course.title,
        description: course.description,
        type: 'lesson',
        videoId:course.video_embed_link.substring(course.video_embed_link.lastIndexOf('?v=')+1),
        categories:[categories[0]],
        thumbnail:course.thumbnail_url,

    })),
    // templates
    ...TEMPLATES.map(template => ({
        id: template.id,
        title: template.name,
        description: template.description,
        type: 'template',
        thumbnail:template.thumbnails[0].url,
        categories:[categories[1]],

    }))
]
