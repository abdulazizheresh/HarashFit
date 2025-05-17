const MembershipsPlanList = [
    {
        id: 1,
        title: 'Monthly Plan',
        subtitle: 'For Flexibility & Convenience',
        price: 75,
        priceType: 'month',
        benefits: [
            'Unlimited access to all features',
            '24/7 customer support',
            'Free updates and upgrades',
            'Cancel anytime'
        ],
    },
    {
        id: 2,
        title: 'Annual Plan',
        subtitle: 'For Long-Term Savings',
        price: 500,
        priceType: 'year',
        benefits: [
            'Unlimited access to all features',
            '24/7 customer support',
            'Free updates and upgrades',
            'Cancel anytime',
            '2 months free'
        ],
        isPopular: true,
        isRecommended: true,
    },
    {
        id: 3,
        title: 'Class Session Plan',
        subtitle: 'For Class Sessions',
        price: 20,
        priceType: 'session',
        benefits: [
            'Access to class session features',
            'Limited customer support',
            'No free updates',
            'Pay per session'
        ],
        isRecommended: true,
        isPopular: false,
    },

    // Starter Plan
    {
        id: 4,
        title: 'Starter Plan',
        subtitle: 'Training Program Only',
        price: 50,
        priceType: '1 Month',
        benefits: [
            'Personalized training plan',
            'Adjusted to your goal, equipment, and time',
            'Delivered in PDF + video samples',
            'No follow-up'
        ],
        idealFor: 'Independent, self-disciplined trainees'
    },
    {
        id: 5,
        title: 'Starter Plan',
        subtitle: 'Training Program Only',
        price: 80,
        priceType: '2 Months',
        benefits: [
            'Personalized training plan',
            'Adjusted to your goal, equipment, and time',
            'Delivered in PDF + video samples',
            'No follow-up'
        ],
        idealFor: 'Independent, self-disciplined trainees'
    },
    {
        id: 6,
        title: 'Starter Plan',
        subtitle: 'Training Program Only',
        price: 120,
        priceType: '3 Months',
        benefits: [
            'Personalized training plan',
            'Adjusted to your goal, equipment, and time',
            'Delivered in PDF + video samples',
            'No follow-up'
        ],
        idealFor: 'Independent, self-disciplined trainees'
    },

    // Coaching Plan
    {
        id: 7,
        title: 'Coaching Plan',
        subtitle: 'Program + Check-ins',
        price: 70,
        priceType: '1 Month',
        benefits: [
            'Personalized plan',
            'Weekly check-ins (videos/images)',
            'Technical correction + plan updates',
            'WhatsApp support (text-based)'
        ],
        idealFor: 'Trainees who want regular accountability'
    },
    {
        id: 8,
        title: 'Coaching Plan',
        subtitle: 'Program + Check-ins',
        price: 120,
        priceType: '2 Months',
        benefits: [
            'Personalized plan',
            'Weekly check-ins (videos/images)',
            'Technical correction + plan updates',
            'WhatsApp support (text-based)'
        ],
        idealFor: 'Trainees who want regular accountability'
    },
    {
        id: 9,
        title: 'Coaching Plan',
        subtitle: 'Program + Check-ins',
        price: 160,
        priceType: '3 Months',
        benefits: [
            'Personalized plan',
            'Weekly check-ins (videos/images)',
            'Technical correction + plan updates',
            'WhatsApp support (text-based)'
        ],
        idealFor: 'Trainees who want regular accountability'
    },

    // Elite Plan
    {
        id: 10,
        title: 'Elite Plan',
        subtitle: 'Program + Nutrition + Full Support',
        price: 100,
        priceType: '1 Month',
        benefits: [
            'Training plan + full nutrition plan',
            'Weekly updates',
            '24/7 support via WhatsApp',
            'Progress tracking + voice/video feedback'
        ],
        idealFor: 'Maximum results + total guidance'
    },
    {
        id: 11,
        title: 'Elite Plan',
        subtitle: 'Program + Nutrition + Full Support',
        price: 175,
        priceType: '2 Months',
        benefits: [
            'Training plan + full nutrition plan',
            'Weekly updates',
            '24/7 support via WhatsApp',
            'Progress tracking + voice/video feedback'
        ],
        idealFor: 'Maximum results + total guidance'
    },
    {
        id: 12,
        title: 'Elite Plan',
        subtitle: 'Program + Nutrition + Full Support',
        price: 250,
        priceType: '3 Months',
        benefits: [
            'Training plan + full nutrition plan',
            'Weekly updates',
            '24/7 support via WhatsApp',
            'Progress tracking + voice/video feedback'
        ],
        idealFor: 'Maximum results + total guidance'
    },

    // Premium Offers
    {
        id: 13,
        title: 'VIP Transformation',
        subtitle: '6-week intense private coaching',
        price: 350,
        priceType: 'One-time',
        benefits: [
            'Weekly video calls',
            'Daily support',
            'Custom metrics tracking',
            'Full-body transformation experience'
        ],
        idealFor: 'High commitment trainees'
    },
    {
        id: 14,
        title: 'Power Launch',
        subtitle: '3-week beginner jumpstart',
        price: 99,
        priceType: 'One-time',
        benefits: [
            'Simple workouts + easy nutrition',
            'Two check-ins',
            'PDF beginner mindset guide'
        ],
        idealFor: 'Beginners'
    },
    {
        id: 15,
        title: 'Reset & Rise',
        subtitle: '4-week comeback package',
        price: 130,
        priceType: 'One-time',
        benefits: [
            'Injury recovery / Post-burnout programming',
            'Low-impact training',
            'Nutrition for gut & energy restoration'
        ],
        idealFor: 'Recovery-focused clients'
    }
]

export default MembershipsPlanList;
