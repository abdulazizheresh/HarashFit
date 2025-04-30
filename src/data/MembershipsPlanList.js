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
    }
]

export default MembershipsPlanList;