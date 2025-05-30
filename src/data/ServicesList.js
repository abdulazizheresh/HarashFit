const servicesList = [
    {
        id: 1,
        slug: "postural-correction",
        title: "Postural Correction",
        description:
            "Improve body alignment and posture to alleviate pain, enhance mobility, and promote overall wellness through guided exercises and corrective training.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Personal Training for Posture",
                points: [
                    "Improved posture and spinal alignment",
                    "Reduced risk of chronic back and neck pain",
                    "Enhanced overall body balance and stability",
                ],
            },
            {
                sectionTitle: "Flexibility Enhancement",
                points: [
                    "Increased flexibility in key muscle groups",
                    "Improved mobility for daily activities",
                    "Better range of motion in joints",
                ],
            },
            {
                sectionTitle: "Long-term Health Benefits",
                points: [
                    "Prevention of postural degeneration",
                    "Boosted confidence through better body alignment",
                    "Enhanced breathing and circulation",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "08.00 - 22.00 pm" },
            { day: "Saturday", hours: "08.00 - 23.00 pm" },
            { day: "Sunday", hours: "07.00 - 23.00 pm" },
        ],
    },
    {
        id: 2,
        slug: "muscle-building",
        title: "Muscle Building",
        description:
            "Focused programs designed to increase muscle mass, strength, and endurance using tailored resistance training and hypertrophy techniques.",
        image: "/assets/images/home_1.webp",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Strength Training Programs",
                points: [
                    "Optimized hypertrophy protocols",
                    "Targeted muscle group development",
                    "Progressive overload techniques",
                ],
            },
            {
                sectionTitle: "Nutritional Support",
                points: [
                    "Customized high-protein meal plans",
                    "Supplement guidance for faster gains",
                    "Increased recovery and performance",
                ],
            },
            {
                sectionTitle: "Performance Tracking",
                points: [
                    "Body composition analysis",
                    "Strength progression tracking",
                    "Goal-oriented milestones",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "07.00 - 22.00 pm" },
            { day: "Saturday", hours: "09.00 - 23.00 pm" },
            { day: "Sunday", hours: "08.00 - 22.00 pm" },
        ],
    },
    {
        id: 3,
        slug: "endurance-training",
        title: "Endurance Training",
        description:
            "Boost your stamina and cardiovascular efficiency with expertly designed endurance programs tailored to your goals.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Cardiovascular Workouts",
                points: [
                    "Increased lung capacity",
                    "Enhanced heart health",
                    "Improved blood circulation",
                ],
            },
            {
                sectionTitle: "Energy Optimization",
                points: [
                    "Boosted daily energy levels",
                    "Greater resistance to fatigue",
                    "Improved recovery between workouts",
                ],
            },
            {
                sectionTitle: "Overall Fitness Gains",
                points: [
                    "Faster running and cycling speeds",
                    "Enhanced muscular endurance",
                    "Better athletic performance",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "06.00 - 22.00 pm" },
            { day: "Saturday", hours: "08.00 - 23.00 pm" },
            { day: "Sunday", hours: "08.00 - 22.00 pm" },
        ],
    },
    {
        id: 4,
        slug: "weight-loss",
        title: "Weight Loss",
        description:
            "Comprehensive weight management programs combining nutrition planning, targeted workouts, and motivational coaching.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Fat-Burning Workouts",
                points: [
                    "Accelerated calorie burn",
                    "Metabolic conditioning",
                    "High-intensity interval training (HIIT)",
                ],
            },
            {
                sectionTitle: "Nutrition Consultation",
                points: [
                    "Calorie-controlled meal plans",
                    "Healthy weight loss strategies",
                    "Improved eating habits",
                ],
            },
            {
                sectionTitle: "Lifestyle Coaching",
                points: [
                    "Behavioral change support",
                    "Goal setting and tracking",
                    "Stress management techniques",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "07.00 - 22.00 pm" },
            { day: "Saturday", hours: "08.00 - 23.00 pm" },
            { day: "Sunday", hours: "08.00 - 22.00 pm" },
        ],
    },
    {
        id: 5,
        slug: "flexibility-improvement",
        title: "Flexibility Improvement",
        description:
            "Expand your range of motion, improve joint health, and reduce the risk of injuries through customized flexibility programs.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Stretching Sessions",
                points: [
                    "Enhanced flexibility",
                    "Injury prevention",
                    "Relaxation and recovery",
                ],
            },
            {
                sectionTitle: "Joint Mobility Training",
                points: [
                    "Better joint lubrication",
                    "Reduced stiffness",
                    "Increased athletic performance",
                ],
            },
            {
                sectionTitle: "Mind-Body Connection",
                points: [
                    "Improved body awareness",
                    "Stress relief through stretching",
                    "Balance between strength and mobility",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "08.00 - 22.00 pm" },
            { day: "Saturday", hours: "08.00 - 23.00 pm" },
            { day: "Sunday", hours: "07.00 - 23.00 pm" },
        ],
    },
    {
        id: 6,
        slug: "functional-training",
        title: "Functional Training",
        description:
            "Develop strength, agility, and balance for everyday movements with functional fitness exercises focused on real-world body mechanics.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Everyday Movement Enhancement",
                points: [
                    "Strengthened movement patterns",
                    "Improved balance and coordination",
                    "Enhanced body control",
                ],
            },
            {
                sectionTitle: "Athletic Performance",
                points: [
                    "Better sports performance",
                    "Faster agility and reaction time",
                    "Injury prevention",
                ],
            },
            {
                sectionTitle: "Core Stability",
                points: [
                    "Stronger core muscles",
                    "Reduced lower back pain",
                    "Better posture under load",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "07.00 - 21.00 pm" },
            { day: "Saturday", hours: "09.00 - 21.00 pm" },
            { day: "Sunday", hours: "09.00 - 20.00 pm" },
        ],
    },
    {
        id: 7,
        slug: "rehab-training",
        title: "Rehabilitation Training",
        description:
            "Recover from injuries, surgeries, or chronic conditions with specialized rehabilitation programs crafted by expert physiotherapists and trainers.",
        image: "/assets/images/blog.png",
        category: "Fitness",
        benefits: [
            {
                sectionTitle: "Post-Injury Rehabilitation",
                points: [
                    "Targeted recovery plans",
                    "Pain management strategies",
                    "Safe progression back to fitness",
                ],
            },
            {
                sectionTitle: "Mobility Restoration",
                points: [
                    "Regained range of motion",
                    "Decreased joint stiffness",
                    "Neuromuscular re-education",
                ],
            },
            {
                sectionTitle: "Strength and Stability",
                points: [
                    "Gradual strength rebuilding",
                    "Improved support around injured areas",
                    "Full recovery assurance",
                ],
            },
        ],
        schedule: [
            { day: "Monday - Friday", hours: "08.00 - 20.00 pm" },
            { day: "Saturday", hours: "09.00 - 20.00 pm" },
            { day: "Sunday", hours: "Closed" },
        ],
    },
];

export default servicesList;
