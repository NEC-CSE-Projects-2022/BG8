
# Team Number – Project Title

## Team Info
- 22471A05D0 — **Shaik Meera Jasmine** ( https://www.linkedin.com/in/meera-jasmine-shaik-8734a9277/ )
_Work Done: Actively involved in requirement analysis, dataset collection, data preprocessing, and testing of the system to ensure accurate and reliable results.

- 22471A05B9 — **Pentyala Lakshmi Prasanna** ( https://www.linkedin.com/in/lakshmiprasanna-pentyala-3a554236b/ )
_Work Done: Played a major role in designing and implementing the core project logic, integrating different modules, handling model development, and preparing complete project documentation.

- 22471A0591 — **Gorre Jayasri** ( https://www.linkedin.com/in/jayasri-gorre-2a499a282)
_Work Done: Responsible for frontend/interface design, assisting in debugging and optimization, validating outputs, and preparing presentations and reports.



---

## Abstract
Diabetic retinopathy (DR) is one of the leading causes of blindness, and early and reliable screening is essential for treatment. This work presents a hybrid detection mechanism utilizing deep learning and swarm-intelligence–based feature optimization. The retinal fundus images are first processed by applying contrast enhancement and segmentation to identify the pathological regions. Then features are jointly extracted via two complementary convolutional net architectures, GoogLeNet and a modified ResNet-16, which are then refined using Adaptive Particle Swarm Optimization (APSO) to remove redundancy. The selected features are classified using popular traditional machine learning models, with Random Forest performing the best overall based on accuracy, precision, recall, F1-score and AUC results on the Kaggle EyePACS dataset. The proposed mechanism was demonstrated to yield state-of-the-art accuracy while generating interpretable outputs via LIME, and so presents strong potential for scalable and trustworthy DR screening

---

## Paper Reference (Inspiration)
– Author Names: A. Ramesh, Shaik Meera Jasmine, P. Lakshmi Prasanna, G. Jayasri et al.
– Paper URL: https://ieeexplore.ieee.org/document/10706847

Description:
This original IEEE conference paper served as the foundational reference for the proposed model. It provided detailed insights into hybrid CNN-based feature extraction, Adaptive Particle Swarm Optimization (APSO) for feature selection, and explainable AI techniques, which were studied and adapted to design an accurate and interpretable diabetic retinopathy detection system.

## Our Improvement Over Existing Paper
The existing reference paper primarily focuses on developing a transparent and explainable AI-based model for diabetic retinopathy detection, emphasizing interpretability and clinical trust. While it achieves good diagnostic performance, the approach mainly relies on a single deep learning architecture and limited feature optimization techniques.

In contrast, our proposed base paper introduces a feature-optimized ensemble framework that significantly enhances both performance and robustness. We integrate dual CNN architectures (GoogLeNet and modified ResNet-16) to capture complementary multi-scale and deep residual features from retinal fundus images. To further improve efficiency and accuracy, Adaptive Particle Swarm Optimization (APSO) is employed to eliminate redundant features and select the most discriminative feature subset.

Additionally, our model incorporates advanced preprocessing techniques such as CLAHE, GrabCut segmentation, median filtering, and normalization to improve image quality and lesion visibility. Unlike the reference work, we evaluate multiple traditional classifiers and demonstrate that Random Forest achieves superior performance, reaching higher accuracy, precision, recall, and AUC scores.

Furthermore, our approach maintains explainability using LIME visualizations, ensuring transparency while achieving state-of-the-art accuracy (99.8%) on the EyePACS dataset. Overall, the proposed model improves upon the existing paper by providing a unified, optimized, and highly accurate ensemble framework that balances performance, scalability, and interpretability for real-world diabetic retinopathy screening.

## About the Project
This project focuses on the automatic detection of Diabetic Retinopathy (DR) using retinal fundus images and artificial intelligence. The system analyzes eye images to identify whether a person is affected by diabetic retinopathy, helping in early diagnosis and treatment.

The project is useful because manual screening by doctors is time-consuming and subjective, especially when large numbers of patients need to be examined. By using deep learning and machine learning techniques, this system provides fast, accurate, and reliable screening, which can assist ophthalmologists and improve healthcare accessibility.

General Project Workflow

Input → Processing → Model → Output

Input: Retinal fundus images collected from the EyePACS dataset

Processing: Image preprocessing using contrast enhancement, noise removal, and segmentation to highlight important retinal regions

Model: Hybrid deep learning model using GoogLeNet and ResNet-16 for feature extraction, APSO for feature selection, and machine learning classifiers for prediction

Output: Final prediction indicating the presence or absence of diabetic retinopathy, along with explainable visual results


## Dataset Used
👉 EyePACS, APTOS & Messidor Diabetic Retinopathy Dataset

**Dataset Details:**
This dataset contains retinal fundus images collected from well-known sources such as EyePACS, APTOS, and Messidor. The images represent both healthy eyes and eyes affected by diabetic retinopathy. It includes labeled data suitable for binary and severity-based classification tasks. The dataset provides diverse image resolutions and quality levels, making it ideal for training and evaluating deep learning models for diabetic retinopathy detection. In this project, the dataset was used for preprocessing, feature extraction, model training, validation, and performance evaluation.

## Dependencies Used
Python, TensorFlow, Keras, NumPy, Pandas, OpenCV, Scikit-learn, Matplotlib, Seaborn, LIME, Jupyter Notebook, Google Colab

## EDA & Preprocessing
Exploratory Data Analysis (EDA) was performed to understand the distribution, quality, and characteristics of the retinal fundus images. Sample images from each class were visualized to identify variations in illumination, contrast, and lesion patterns. Class balance was analyzed to ensure fair training and evaluation of the model.

For preprocessing, several image enhancement techniques were applied to improve image quality and highlight important retinal features. Contrast Limited Adaptive Histogram Equalization (CLAHE) was used to enhance local contrast, while noise was reduced using median filtering. GrabCut segmentation was applied to extract the region of interest, and all images were resized and normalized to maintain consistency before being fed into the model.

## Model Training Info
The model was trained using a hybrid deep learning framework on the EyePACS dataset. The dataset was split into training, validation, and testing sets in a 60:20:20 ratio to ensure unbiased performance evaluation. During training, preprocessed retinal images were passed through GoogLeNet and ResNet-16 models to extract deep features.

Adaptive Particle Swarm Optimization (APSO) was applied to select the most relevant features and reduce redundancy. The optimized feature set was then used to train multiple machine learning classifiers, including Random Forest, Support Vector Machine, Naïve Bayes, and Decision Tree. Model performance was evaluated using accuracy, precision, recall, F1-score, and AUC-ROC metrics, with Random Forest achieving the best overall results.

## Model Testing / Evaluation
The trained model was evaluated using the test dataset that was not seen during training to ensure unbiased performance assessment. Model testing was conducted using standard evaluation metrics such as accuracy, precision, recall, F1-score, specificity, and AUC-ROC to measure classification effectiveness.

Confusion matrix analysis was used to examine true positive, true negative, false positive, and false negative predictions. Cross-validation was applied to verify the stability and generalization of the model across different data splits. Additionally, LIME-based visual explanations were generated to interpret the model’s predictions and highlight important retinal regions influencing the final decision.

## Results
The proposed hybrid model demonstrated high accuracy and reliable performance in detecting diabetic retinopathy from retinal fundus images. Among all evaluated classifiers, the Random Forest model achieved the best results, providing superior accuracy, precision, recall, and F1-score.

The model attained an overall classification accuracy of 99.8%, with strong sensitivity and specificity, indicating effective identification of both diabetic retinopathy and non-diabetic cases. The AUC-ROC value of 0.99 further confirms the model’s strong discriminative capability.

Visual explanations generated using LIME highlighted clinically relevant retinal regions such as microaneurysms and hemorrhages, ensuring transparency and trust in the model’s predictions. These results demonstrate that the proposed feature-optimized ensemble framework outperforms existing approaches and is suitable for accurate and interpretable diabetic retinopathy screening.

## Limitations & Future Work
Although the proposed model achieves high accuracy, it has certain limitations. The system was trained and evaluated on publicly available datasets, which may not fully represent real-world clinical variations. The current implementation focuses mainly on binary classification (DR vs. No DR) and does not provide detailed severity grading. Additionally, the model requires high computational resources during training due to the use of multiple deep learning architectures.

In future work, the model can be extended to multi-class diabetic retinopathy severity classification. Performance can be further improved by training on larger and more diverse clinical datasets. Real-time deployment through a web or mobile application can enhance accessibility for remote screening. Incorporating additional explainable AI techniques and optimizing the model for lightweight devices will also improve clinical usability.

## Deployment Info
The proposed diabetic retinopathy detection model was deployed using a Python-based environment for easy accessibility and testing. The trained model was integrated with a simple web interface that allows users to upload retinal fundus images for prediction. Image preprocessing and model inference are performed on the backend, and the prediction results are displayed to the user.

The system can be deployed on cloud platforms or local servers, making it suitable for real-world screening applications. Tools such as Flask/Streamlit, along with Google Colab or local machines, were used to support deployment and testing. This deployment setup enables fast predictions, scalability, and ease of use for medical professionals.
