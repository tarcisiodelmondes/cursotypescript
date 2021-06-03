type VotingOptions = {
  option: string;
  numberOfVote: number;
};

export class Voting {
  private _votingOptions: VotingOptions[] = [];
  constructor(public question: string) {}

  addVotingOptions(option: VotingOptions): void {
    this._votingOptions.push(option);
  }

  vote(index: number): void {
    if (!this._votingOptions[index]) return;

    this._votingOptions[index].numberOfVote++;
  }

  get votingOptions(): VotingOptions[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private polls: Voting[] = [];

  addVoting(vote: Voting): void {
    this.polls.push(vote);
  }

  showVoting(): void {
    for (const poll of this.polls) {
      console.log(poll.question);

      for (const votingOptions of poll.votingOptions) {
        console.log(votingOptions.option, votingOptions.numberOfVote);
      }
    }
  }
}

const voting = new Voting('what is your favorite language?');

voting.addVotingOptions({ option: 'Python', numberOfVote: 0 });
voting.addVotingOptions({ option: 'JavaScript', numberOfVote: 0 });
voting.addVotingOptions({ option: 'Java', numberOfVote: 0 });

voting.vote(2);
voting.vote(1);
voting.vote(1);
voting.vote(0);
voting.vote(0);
voting.vote(1);

const votingApp = new VotingApp();

votingApp.addVoting(voting);
votingApp.showVoting();
