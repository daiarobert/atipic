import React from 'react';
import InfoFirstPageItem from './InfoFirstPageItem';
import './infoFirstPage.scss';
import { faBaby, faChess, faSmileBeam, faCubes, faUsers } from '@fortawesome/free-solid-svg-icons';

const InfoFirstPage = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <InfoFirstPageItem
                    icon={faCubes}
                    btnName="Read more"
                    title="What is ABA therapy?"
                    description="ABA therapy is a method of therapy based on the principles of learning and 
                    behavioral therapy"
                    modalTitle="What is ABA therapy?"
                    modalBody={
                        <div class="modal__content">
                            <p>
                                ABA therapy is a method of therapy based on the principles of learning and therapy
                                behavioral factors that help us understand:
                            </p>
                            <div class="list-checked">
                                <ul>
                                    <li> How behavior works </li>
                                    <li> How the environment influences behavior</li>
                                    <li> How the learning process takes place</li>
                                </ul>
                            </div>
                            <p>
                                <strong>The goals of ABA therapy are:</strong>
                            </p>
                            <div class="list-checked">
                                <ul>
                                    <li>Language development (communication, social skills, writing, reading) </li>
                                    <li>
                                        {' '}
                                        Self-care (feeding, clothing, personal hygiene, handling of objects, household
                                        activities)
                                    </li>
                                    <li>
                                        {' '}
                                        Reducing unwanted behaviors (self-stimulation, stereotypes, non-compliance,
                                        aggressivity)
                                    </li>
                                    <li>Strengthening and introducing desirable behaviors</li>
                                </ul>
                            </div>
                        </div>
                    }
                />

                <InfoFirstPageItem
                    icon={faChess}
                    btnName="Read more"
                    title="Occupational Therapy - We Learn by Playing"
                    description="Because we work with princhindei, we know how important it is to capture their attention in the most interactive and dynamic way possible, so we use therapy techniques while playing."
                    modalTitle="Occupational Therapy - We Learn by Playing"
                    modalBody={
                        <div class="modal__content">
                            <p>
                                Because we work with princhindei, we know how important it is to get their attention
                                through methods as interactive and dynamic as possible, so we use therapy techniques
                                while playing.
                            </p>
                            <p>
                                Occupational therapy is a method that helps to develop cognitive abilities, social,
                                physical and motor skills in order to develop daily skills that enhance independence and
                                participation in as many activities as possible.
                            </p>
                            <p>
                                <strong>Occupational activities include: </strong>
                            </p>
                            <div class="list-checked">
                                <ul>
                                    <li>
                                        Self-care: nutrition, personal hygiene, clothing, combing, mobility and
                                        transfer, handling of objects
                                    </li>
                                    <li>Profitable activities</li>
                                    <li> Educational activities</li>
                                    <li>Recreational activities: games, sports, hobbies</li>
                                </ul>
                            </div>
                        </div>
                    }
                />

                <InfoFirstPageItem
                    icon={faSmileBeam}
                    btnName="Read more"
                    title="Art Therapy or Art Therapy"
                    description="Art therapy is a method of therapeutic approach within a complex program of intervention, based on visual language and creativity."
                    modalTitle="Art therapy or art therapy"
                    modalBody={
                        <div class="modal__content">
                            <p>
                                Art therapy is a method of therapeutic approach within a complex program of
                                intervention, based on visual language and creativity. Following and completing other
                                methods therapeutic, art therapy develops and improves the patient's emotional state,
                                improves certain motor and cognitive skills.
                            </p>
                            <p>
                                {' '}
                                We use as working techniques: painting, drawing, modeling, collage, recitation, music,
                                dance.{' '}
                            </p>
                            <p>
                                <strong> The goals of art therapy are: </strong>
                            </p>
                            <div class="list-checked">
                                <ul>
                                    <li> Sensory integration and regulation </li>
                                    <li> Emotions and self-expression </li>
                                    <li> Solving motor deficiencies and graphic skills </li>
                                    <li> Productive breaks </li>
                                    <li> Hand-eye coordination </li>
                                    <li> Decreased anxiety </li>
                                    <li> Developing cognitive abilities and attention </li>
                                </ul>
                            </div>
                        </div>
                    }
                />

                <InfoFirstPageItem
                    icon={faBaby}
                    btnName="Citește mai mult"
                    btnName="Read more"
                    title="Verbal Behavioral Therapy (VB)"
                    description="VB therapy encourages the learning of language and communication by connecting words with their meaning, thus learning that by using certain words we can achieve what we want."
                    modalTitle="Verbal Behavior Therapy (VB)"
                    modalBody={
                        <div class="modal__content text-start">
                            <div>
                                <p>
                                    VB therapy encourages language learning and communication by connecting words with
                                    their meaning, thus learning that by using certain words we can get what we want we
                                    want. VB does not use words as labels, but rather explains why we use them these
                                    words and how they are useful in making requests or communicating ideas.
                                </p>
                                <p>
                                    VB is a therapy based on the principles of Applied Behavior Analysis (ABA) and the
                                    behavioralist theories of B. F. Skinner. He classified the language into 4
                                    categories called "operators" each having a different function:
                                </p>
                            </div>

                            <div class="list-checked">
                                <ul>
                                    <li> “Mand”: Form a request </li>
                                    <li>Touch: Stimulating the response with a comment or visual stimulus</li>
                                    <li>Intraverbal: A word used to react or answer a question</li>
                                    <li> Echoing: Repeating or imitating words helps them learn </li>
                                </ul>
                            </div>
                        </div>
                    }
                />

                <InfoFirstPageItem
                    icon={faUsers}
                    iconClass="icon-blue"
                    circleClass="circle-blue"
                    title="Personal development and psychotherapy - are processes addressed to any person on the road to self-knowledge or personal, professional, relational or stagnant people who want to combat an emotional, behavioral, eating, psychosomatic disorder, etc."
                />
            </div>
        </div>
    );
};

export default InfoFirstPage;
