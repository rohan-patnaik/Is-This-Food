const classes = {
    0 : "food",
    1 : "not_food"
};

const status1 = document.getElementById("status");

if (status1) {
    status1.InnerText = "Loaded Tensorflow.js version - " + tf.version.tfjs;
}

let model;

const loadModel = async() => {
    try {
        const tfliteModel = await tflite.loadTFLiteModel(
            "/is_this_food_model_efficientnet.tflite"
        );
        model = tfliteModel;

        if (tfliteModel) {
            model_status.innerText = "Model loaded";
        }
    }
    catch (error) {
        console.log(error);
    }
};

loadModel();

//Function to classify image
function classifyImage(model, image) {
    image = tf.image.resizeBilinear(image,[224,224]);
    image = tf.expandDims(image);

    image = tf.cast(image, 'int32');
    const output = model.predict(image);
    const output_values = tf.softmax(output.arraySync()[0]);
    const output_max = tf.max(output.arraySync()[0]);
    console.log(output_values.arraySync());
    console.log(output.arraySync()[0]);

    predicted_class.textContent = classes[output_values.argMax().arraySync()];
    // predicted_prob.textContent = output_values.max().arraySync() * 100 + "%";
    predicted_prob.textContent = (((1 / 256) * output_max.arraySync()) * 100).toFixed(2) + "%";
}

const fileInput = document.getElementById("file-input");
const image = document.getElementById("image");
// const uploadButton = document.getElementById("upload-button");

function getImage() {
    if(!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
        const dataUrl = event.target.result;

        const imageElement = new Image();
        imageElement.src = dataUrl;

        imageElement.onload = function () {
            image.setAttribute("src", this.src);

            const currImage = tf.browser.fromPixels(imageElement);

            classifyImage(model, currImage);
        };

        document.body.classList.add("image-loaded");
    };

    reader.readAsDataURL(file);
};

fileInput.addEventListener("change", getImage);
// uploadButton.addEventListener("click", () => fileInput.click());