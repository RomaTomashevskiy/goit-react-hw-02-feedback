import React, { Component } from "react";
import Container from "./Feedback/Container/Container";
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Statistics from "./Feedback/Statistics/Statistics ";
import Section from "./Feedback/Section/Section";
import Notification from "./Feedback/Notification/Notification";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = options => {
        this.setState(prevState => ({
            [options]: prevState[options] + 1
        }));
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100) || 0;
    };

    countTotalFeedback = () => {
      return  Object.values(this.state).reduce((acc , option) => acc + option , 0)
    };


    render() {
        const objKey = Object.keys(this.state);
        const feedback = this.addFeedback;
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const feedbackPercentage = this.countPositiveFeedbackPercentage();
        
        return (
            <Container>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                        options={objKey}
                        onLeaveFeedback={feedback}
                    />
                </Section>
                
                <Section title={"Statistics"}>
                    {total ? <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={feedbackPercentage} />
                        :
                        <Notification message={"There is no feedback"} />}
                </Section>
            </Container>
        );
    };
};

export default App;