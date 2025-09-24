document.getElementById("submit").addEventListener("click", async function () {
    const symptoms = document.getElementById("symptoms").value;
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = "Loading...";

    let disease_explanation = {

        "Fungal infection": {
            "Explanation": "Fungal infections are caused by fungi that affect the skin, nails, or other body parts. Common types include athlete’s foot, ringworm, and thrush. Antifungal medications (creams, oral tablets, or injections) like clotrimazole, terbinafine, or fluconazole are commonly used. Keeping the affected area clean and dry is important for recovery. Avoid sharing personal items like towels; wear breathable footwear; and avoid tight, non-ventilated clothing."
        },
    
        "Allergy": {
            "Explanation": "Allergies are hypersensitive immune reactions to substances such as pollen, dust mites, or certain foods. Treatment includes antihistamines, decongestants, corticosteroids, or allergy shots. In severe cases, epinephrine (adrenaline) may be needed. Identify and avoid allergens; use air purifiers; keep windows closed during high pollen seasons; and carry an epinephrine auto-injector if necessary."
        },
    
        "GERD (Gastroesophageal Reflux Disease)": {
            "Explanation": "GERD is a digestive disorder where stomach acid or bile irritates the food pipe lining. Common symptoms include heartburn, chest pain, difficulty swallowing, and regurgitation of food or sour liquid. Treatment involves antacids, proton pump inhibitors (PPIs), H2 blockers, and lifestyle changes like eating smaller meals, avoiding spicy or fatty foods, and sleeping with the head elevated."
        },
    
        "Chronic cholestasis": {
            "Explanation": "Chronic cholestasis is a condition where bile flow is impaired, leading to the buildup of bile acids in the liver and bloodstream. It can cause jaundice, pruritus (itching), and liver damage. Treatment includes managing the underlying cause (e.g., viral hepatitis or gallstones), medications to reduce itching (such as ursodeoxycholic acid), and lifestyle changes like avoiding alcohol."
        },
    
        "Drug Reaction": {
            "Explanation": "Drug reactions are adverse responses of the body to medication, ranging from mild rashes to severe conditions like anaphylaxis. Treatment varies depending on the type and severity of the reaction and may include discontinuing the offending drug, antihistamines, or corticosteroids."
        },
    
        "Peptic ulcer disease": {
            "Explanation": "Peptic ulcers are sores that develop on the lining of the stomach, small intestine, or esophagus due to acid exposure. They can cause abdominal pain, nausea, and vomiting. Treatment typically includes proton pump inhibitors (PPIs), H2 blockers, antibiotics (for H. pylori infections), and antacids. Avoiding NSAIDs and alcohol can also help in healing."
        },
    
        "AIDS (Acquired Immunodeficiency Syndrome)": {
            "Explanation": "AIDS is the final stage of HIV infection, where the immune system is severely damaged, making the body vulnerable to infections and certain cancers. While there is no cure, antiretroviral therapy (ART) can suppress the virus and improve the quality of life. Safe practices to prevent transmission include using condoms and avoiding sharing needles."
        },
    
        "Diabetes": {
            "Explanation": "Diabetes is a condition where the body is unable to properly regulate blood sugar levels, either due to insufficient insulin production (Type 1) or insulin resistance (Type 2). Management includes lifestyle changes, regular blood sugar monitoring, and medications like insulin or oral hypoglycemics. A balanced diet and exercise are key to managing the disease."
        },
    
        "Gastroenteritis": {
            "Explanation": "Gastroenteritis is the inflammation of the stomach and intestines, often caused by viral infections (e.g., norovirus) or bacteria (e.g., Salmonella). Symptoms include diarrhea, vomiting, abdominal cramps, and fever. Treatment includes staying hydrated, eating a bland diet, and taking anti-nausea or anti-diarrheal medications."
        },
    
        "Bronchial Asthma": {
            "Explanation": "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, causing wheezing, shortness of breath, chest tightness, and coughing. Inhalers (bronchodilators) and corticosteroids are used for symptom control and to reduce inflammation. Avoiding triggers like allergens, smoke, and air pollution is important."
        },
    
        "Hypertension": {
            "Explanation": "Hypertension, or high blood pressure, is a condition where the force of the blood against the artery walls is too high. It can lead to heart disease, stroke, and kidney damage. Treatment includes lifestyle changes (such as a low-sodium diet, regular exercise, and weight loss) and antihypertensive medications like ACE inhibitors, beta-blockers, and diuretics."
        },
    
        "Migraine": {
            "Explanation": "Migraine is a type of headache that is often accompanied by nausea, vomiting, and sensitivity to light and sound. The exact cause is unclear, but triggers may include stress, hormonal changes, or certain foods. Treatment involves pain relief medications (e.g., triptans, NSAIDs) and preventative medications (e.g., beta-blockers, anticonvulsants)."
        },
    
        "Cervical spondylosis": {
            "Explanation": "Cervical spondylosis is the age-related degeneration of the vertebrae and discs in the neck, which can cause neck pain, stiffness, and headaches. Treatment typically includes pain management (NSAIDs, muscle relaxants), physical therapy, and in some cases, surgery to address nerve compression."
        },
    
        "Paralysis (brain hemorrhage)": {
            "Explanation": "Paralysis due to a brain hemorrhage occurs when there is bleeding in or around the brain, often caused by a stroke or aneurysm. Symptoms include sudden weakness or numbness, difficulty speaking, or loss of coordination. Emergency medical treatment and rehabilitation are essential for recovery, and treatment focuses on controlling bleeding, restoring blood flow, and rehabilitation."
        },
    
        "Jaundice": {
            "Explanation": "Jaundice is a yellowing of the skin and eyes due to the buildup of bilirubin, a substance produced by the breakdown of red blood cells. It can be caused by liver disease, hemolysis, or bile duct obstruction. Treatment depends on the underlying cause and may include medications, blood transfusions, or surgery."
        },
    
        "Malaria": {
            "Explanation": "Malaria is a mosquito-borne infectious disease caused by the Plasmodium parasite, leading to fever, chills, and flu-like symptoms. Treatment involves antimalarial drugs like chloroquine, artemisinin-based therapies, or quinine. Prevention includes using insect repellent, sleeping under nets, and taking prophylactic medication in endemic areas."
        },
    
        "Chicken pox": {
            "Explanation": "Chickenpox is a highly contagious viral infection that causes an itchy rash and flu-like symptoms. It is caused by the varicella-zoster virus. The disease typically resolves on its own, but antiviral medications can be prescribed for severe cases. Vaccination is the best form of prevention."
        },
    
        "Dengue": {
            "Explanation": "Dengue is a viral illness transmitted by mosquitoes, characterized by fever, severe headache, pain behind the eyes, joint pain, and rash. There is no specific treatment, but fluids and pain relievers (e.g., acetaminophen) are used. Preventing mosquito bites is key in endemic areas."
        },
    
        "Typhoid": {
            "Explanation": "Typhoid fever is a bacterial infection caused by *Salmonella typhi*, leading to fever, abdominal pain, and digestive disturbances. Treatment involves antibiotics like ciprofloxacin or azithromycin. Hygiene measures such as safe water and food are important for prevention."
        },
    
        "Hepatitis A": {
            "Explanation": "Hepatitis A is a viral liver infection caused by the hepatitis A virus, typically transmitted through contaminated food or water. Symptoms include jaundice, fatigue, and abdominal pain. Vaccination is available, and treatment focuses on symptom management as the body clears the virus on its own."
        },
    
        "Hepatitis B": {
            "Explanation": "Hepatitis B is a viral infection of the liver that can lead to chronic liver disease. It is transmitted through blood or bodily fluids. Antiviral medications like tenofovir and entecavir are used in chronic cases. Vaccination is available for prevention."
        },
    
        "Hepatitis C": {
            "Explanation": "Hepatitis C is a viral infection that causes inflammation of the liver, often leading to cirrhosis and liver cancer. It is spread through blood-to-blood contact. Antiviral medications like sofosbuvir and ledipasvir can cure most cases, and liver health is monitored over time."
        },
    
        "Hepatitis D": {
            "Explanation": "Hepatitis D is a viral infection that occurs only in people infected with hepatitis B. It causes more severe liver disease. Treatment includes antivirals and, in some cases, liver transplantation. Prevention includes hepatitis B vaccination."
        },
    
        "Hepatitis E": {
            "Explanation": "Hepatitis E is a viral liver disease caused by the hepatitis E virus, often transmitted through contaminated drinking water. It can cause acute liver failure, especially in pregnant women. Treatment involves supportive care, and vaccination is available in some countries."
        },

        "Alcoholic hepatitis": {
            "Explanation": "Alcoholic hepatitis is liver inflammation caused by excessive alcohol consumption over time. Symptoms include jaundice, fatigue, nausea, and abdominal pain. The primary treatment is to stop drinking alcohol completely. Medications like corticosteroids or pentoxifylline may be used in severe cases. Liver transplant may be considered for end-stage liver disease. Avoid alcohol; follow a nutritious diet; maintain regular medical check-ups; and manage any comorbidities (e.g., diabetes)."
        },

        "Tuberculosis": {
            "Explanation": "Tuberculosis is a bacterial infection primarily affecting the lungs but can spread to other parts of the body. Symptoms include coughing, fever, night sweats, and weight loss. A combination of antibiotics (e.g., rifampicin, isoniazid, ethambutol, pyrazinamide) for 6-9 months. Adherence to the full course of treatment is crucial to prevent resistance. Complete the full treatment course; maintain good nutrition; and avoid close contact with others during the contagious phase."
        },

        "Common Cold": {
            "Explanation": "The common cold is a viral infection of the upper respiratory tract. Symptoms include a runny nose, sore throat, cough, congestion, and mild fever. It usually resolves on its own within 7-10 days. Treatment involves rest, hydration, and over-the-counter medications for symptom relief (e.g., decongestants, pain relievers). Wash hands frequently to prevent spread; avoid close contact with others; and get plenty of rest."
        },

        "Pneumonia": {
            "Explanation": "Pneumonia is an infection of the lungs caused by bacteria, viruses, or fungi. Symptoms include cough, fever, shortness of breath, and chest pain. Antibiotics are used for bacterial pneumonia, while viral pneumonia may require antiviral medication. In severe cases, hospitalization may be necessary. Get vaccinated against pneumonia; avoid smoking; and seek early treatment if symptoms worsen."
        },

        "Dimorphic hemorrhoids (piles)": {
            "Explanation": "Dimorphic hemorrhoids are swollen blood vessels in the rectal area, often caused by prolonged sitting, constipation, or straining. Symptoms include itching, bleeding, and pain during bowel movements. Treatment includes over-the-counter creams, suppositories, and dietary changes (e.g., increased fiber intake). In severe cases, surgical removal may be necessary. Avoid straining during bowel movements; drink plenty of fluids; and eat high-fiber foods."
        },

        "Heart attack": {
            "Explanation": "A heart attack (myocardial infarction) occurs when blood flow to the heart muscle is blocked, leading to tissue damage. Symptoms include chest pain, shortness of breath, nausea, and sweating. Immediate medical attention is critical. Treatment may involve medications (e.g., blood thinners, pain relievers), angioplasty, or surgery (e.g., bypass). Maintain a heart-healthy lifestyle; avoid smoking; and manage stress and blood pressure."
        },

        "Varicose veins": {
            "Explanation": "Varicose veins are enlarged, twisted veins, usually in the legs, caused by weakened valves and poor blood circulation. Symptoms include visible veins, aching, and swelling. Compression stockings and lifestyle changes (e.g., exercise, elevating the legs) help manage the condition. In severe cases, sclerotherapy or surgery may be required. Avoid prolonged standing; maintain a healthy weight; and engage in regular physical activity."
        },

        "Hypothyroidism": {
            "Explanation": "Hypothyroidism is a condition where the thyroid gland produces insufficient thyroid hormones, leading to a slow metabolism. Symptoms include fatigue, weight gain, cold intolerance, and dry skin. Treatment involves thyroid hormone replacement therapy (e.g., levothyroxine). Regular blood tests are necessary to monitor thyroid levels. Take prescribed medication regularly; eat a balanced diet; and avoid excessive iodine intake."
        },

        "Hyperthyroidism": {
            "Explanation": "Hyperthyroidism occurs when the thyroid gland produces excessive thyroid hormones, leading to an overactive metabolism. Symptoms include weight loss, rapid heartbeat, sweating, and nervousness. Treatment includes antithyroid medications, radioactive iodine, or surgery. Regular monitoring of thyroid function is essential. Manage stress; avoid stimulants like caffeine; and maintain a balanced diet."
        },

        "Hypoglycemia": {
            "Explanation": "Hypoglycemia occurs when blood sugar levels drop too low, leading to symptoms like shakiness, confusion, dizziness, and sweating. Treatment includes consuming quick sources of glucose, such as sugary drinks or tablets. Severe cases may require intravenous glucose. Eat frequent, balanced meals; avoid skipping meals; and monitor blood sugar levels if diabetic."
        },

        "Osteoarthritis": {
            "Explanation": "Osteoarthritis is a degenerative joint disease that causes cartilage breakdown, leading to pain and stiffness, particularly in the knees, hips, and hands. Treatment includes pain relievers, physical therapy, and joint protection. In severe cases, joint replacement surgery may be necessary. Maintain a healthy weight; exercise regularly to strengthen muscles; and avoid repetitive joint stress."
        },

        "Arthritis": {
            "Explanation": "Arthritis is inflammation of the joints, leading to pain, swelling, and reduced mobility. Common types include osteoarthritis and rheumatoid arthritis. Treatment varies based on the type, including anti-inflammatory drugs, disease-modifying antirheumatic drugs (DMARDs), and physical therapy. Stay active to maintain joint mobility; manage weight; and use joint protection techniques."
        },

        "Paroxysmal Positional Vertigo (PPV)": {
            "Explanation": "Paroxysmal positional vertigo is a vestibular disorder that causes dizziness when changing head positions. It's caused by calcium crystals in the inner ear. Treatment includes head maneuvers (e.g., Epley maneuver) to reposition the crystals. Avoid sudden head movements; perform prescribed exercises; and consult a healthcare professional for personalized treatment."
        },

        "Acne": {
            "Explanation": "Acne is a skin condition that occurs when hair follicles become clogged with oil and dead skin cells. Symptoms include pimples, blackheads, and cysts, primarily on the face, back, and shoulders. Treatment includes topical treatments (e.g., benzoyl peroxide, retinoids) and oral medications (e.g., antibiotics, hormonal therapy). Maintain a gentle skincare routine; avoid squeezing pimples; and stay hydrated."
        },

        "Urinary tract infection (UTI)": {
            "Explanation": "A UTI is an infection in any part of the urinary system, including the bladder, kidneys, and urethra. Symptoms include frequent urination, burning sensation, and lower abdominal pain. Treatment involves antibiotics. Drink plenty of water to flush bacteria out of the urinary system; avoid holding urine for long periods; and practice good hygiene."
        },

        "Psoriasis": {
            "Explanation": "Psoriasis is an autoimmune condition that causes the rapid growth of skin cells, leading to scaly patches on the skin. Treatment includes topical treatments (e.g., corticosteroids, vitamin D analogs), phototherapy, and systemic medications. Manage stress; moisturize the skin regularly; and avoid triggers such as smoking and alcohol."
        },

        "Impetigo": {
            "Explanation": "Impetigo is a highly contagious bacterial skin infection characterized by red sores, usually around the nose and mouth. Treatment includes topical or oral antibiotics (e.g., mupirocin, cephalexin). Practice good hygiene; avoid scratching affected areas; and keep sores covered."
        }
    };
    

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ symptoms })
        });

        const data = await response.json();

        if (data.status === "success") {
            let content = `<strong>Predicted Disease:</strong> ${data.disease}`;
            
            let explanation = disease_explanation[data.disease]?.Explanation;

            if (explanation) {
                content += `<br><strong>Explanation:</strong> ${explanation}`;
            }
            responseDiv.innerHTML = content;
        } else {
            responseDiv.textContent = `Error: ${data.message}`;
        }
    } catch (error) {
        responseDiv.textContent = "An error occurred. Please try again.";
    }
});
