const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);
    return (
      <div>
        {options.map(option => (
          <button name={option} onClick={onLeaveFeedback} key={option}>
            {option}
          </button>
        ))}
      </div>
    );

};
export default FeedbackOptions;