import React from 'react';
import './ourStory.scss';

const OurStory = () => {
    return (
        <div className="wrapper-ourStory row w-100">
            <div className="wrapper-text p-5">
                <div class="header-ourStory">
                    <h2>Our Story</h2>
                    <div></div>
                </div>
                <div class="pb-text col-12">
                    <p className="text-muted">
                        {' '}
                        Born out of the desire of specialists to make a difference in the market for psychological
                        services,
                        <strong>
                            {' '}
                            Therapeutic Association for Intervention, Individual and Behavioral Psychotherapy -
                            A.T.I.P.I.C{' '}
                        </strong>{' '}
                        proposes an integrated, multidisciplinary and perspective approach of the "science of the soul
                        and the mind."{' '}
                    </p>
                    <p className="text-muted">
                        {' '}
                        Our association focuses on therapy, recovery and maximizing the potential of children with ASD
                        and developmental delay, as well as the provision of psycho-emotional support their families.{' '}
                    </p>
                    <p className="text-muted">
                        {' '}
                        Personalized therapy tailored to individual needs as well as the best services quality offered
                        by a specialized staff dedicated entirely to the little ones, helps us to be proud of
                        exceptional results obtained with the help of ABA therapy, VB, art therapy and speech therapy.{' '}
                    </p>
                    <p className="text-muted">
                        {' '}
                        Results range from language correction, behavioral stability, and reducing stereotypes, to the
                        age-appropriate adaptation and social inclusion.{' '}
                    </p>
                    <p className="text-muted">
                        {' '}
                        For us, the daily challenge is to bring valuable information, support and counseling, to
                        inspire, with passion and devotion, with respect for the profession and love for people.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
