import React from 'react'
import './market.css'
import market from '../../assets/market.jpeg'

function Market() {
    return (
        <div className='market'>
            <div className='market-left'>
                <img src={market} alt='' />
            </div>
            <div className='market-right'>
                <h2> Market Trend</h2>
                <p>
                    A notable trend in this domain is the rise of circular fashion, which advocates for the reuse, recycling, and upcycling of garments to reduce waste and minimize environmental impact.
                    The revenue in the apparel market in India is projected to reach $105.50 billion in 2024, according to data analytics platform Statista.
                </p>
                <h2>Current scenario of sustainable fashion in India</h2>
                <p>
                    The sustainable fashion market in India is still in its early stages, but it has shown steady growth over the past few years.

                    In recent years, many Indian brands and designers have adopted sustainable practices to address these issues. The sustainable fashion market in India is expected to grow at a CAGR of 10.6% during 2021-2026, according to a report by ResearchAndMarkets.com. The report also suggests that the market growth will be driven by increased consumer awareness, government initiatives, and the availability of sustainable materials.
                </p>
                <h2>Sustainable Fashion Market Synopsis (2023-2031):</h2>
                <p>
                    The global Sustainable Fashion market size was valued at USD 7695.72 million in 2022 and is expected to expand at a CAGR of 9.46% during the forecast period, reaching USD 13236.88 million by 2031.
                    The report combines extensive quantitative analysis and exhaustive qualitative analysis, ranges from a macro overview of the total market size, industry chain, and market dynamics to micro details of segment markets by type, application and region, and, as a result, provides a holistic view of, as well as a deep insight into the Sustainable Fashion market covering all its essential aspects.
                </p>
                <p>Sustainable clothing has gained popularity as denoted by statistics. The sustainable fashion market in India is projected to grow at a CAGR of 10.6 per cent between 2021-2026, reaching a market size of $9 billion by 2025.</p>
            </div>
        </div>
    )
}

export default Market