const DataService = {
    getAudiences() {
        return new Promise((resolve) => {
            resolve([
                { "title": "Women Recovering from Divorce", "value": "Women Recovering from Divorce" },
                { "title": "Single Mothers Seeking Love", "value": "Single Mothers Seeking Love" },
                { "title": "Women Who Have Experienced Domestic Abuse", "value": "Women Who Have Experienced Domestic Abuse" },
                { "title": "Widowed Women Re-entering the Dating Scene", "value": "Widowed Women Re-entering the Dating Scene" },
                { "title": "Women with Childhood Trauma", "value": "Women with Childhood Trauma" },
                { "title": "Women Experiencing Infidelity", "value": "Women Experiencing Infidelity" },
                { "title": "Women Struggling with Body Image Issues", "value": "Women Struggling with Body Image Issues" },
                { "title": "Women in High-Pressure Careers", "value": "Women in High-Pressure Careers" },
                { "title": "Women Facing Societal Pressure to Marry", "value": "Women Facing Societal Pressure to Marry" },
                { "title": "Women Who Have Been Gaslit in Relationships", "value": "Women Who Have Been Gaslit in Relationships" },
                { "title": "Women with a Fear of Commitment", "value": "Women with a Fear of Commitment" },
                { "title": "Women Navigating Midlife Changes", "value": "Women Navigating Midlife Changes" },
                { "title": "Women Who've Been Cheated On", "value": "Women Who've Been Cheated On" },
                { "title": "Women Struggling with Fertility Issues", "value": "Women Struggling with Fertility Issues" },
                { "title": "Women Who Have Lost a Child", "value": "Women Who Have Lost a Child" },
                { "title": "Women Balancing Work and Relationships", "value": "Women Balancing Work and Relationships" },
                { "title": "Women with Caregiver Responsibilities", "value": "Women with Caregiver Responsibilities" },
                { "title": "Women in Long-Distance Relationships", "value": "Women in Long-Distance Relationships" },
                { "title": "Women Recovering from Addictions", "value": "Women Recovering from Addictions" },
                { "title": "Women Healing from Narcissistic Relationships", "value": "Women Healing from Narcissistic Relationships" },
                { "title": "Women with Trust Issues", "value": "Women with Trust Issues" },
                { "title": "Women Experiencing Empty Nest Syndrome", "value": "Women Experiencing Empty Nest Syndrome" },
                { "title": "Women Feeling Pressured by Biological Clocks", "value": "Women Feeling Pressured by Biological Clocks" },
                { "title": "Women Transitioning to Motherhood", "value": "Women Transitioning to Motherhood" },
                { "title": "Women Feeling Insecure About Aging", "value": "Women Feeling Insecure About Aging" },
                { "title": "Women Facing Financial Struggles", "value": "Women Facing Financial Struggles" },
                { "title": "Women in Unfulfilling Marriages", "value": "Women in Unfulfilling Marriages" },
                { "title": "Women Seeking Personal Growth", "value": "Women Seeking Personal Growth" },
                { "title": "Women Who've Lost Their Identity in Relationships", "value": "Women Who've Lost Their Identity in Relationships" },
                { "title": "Women Struggling with Postpartum Depression", "value": "Women Struggling with Postpartum Depression" },
                { "title": "Women Who Feel Overlooked by Partners", "value": "Women Who Feel Overlooked by Partners" },
                { "title": "Women Rebuilding Self-Esteem", "value": "Women Rebuilding Self-Esteem" },
                { "title": "Women Navigating Gender Roles in Relationships", "value": "Women Navigating Gender Roles in Relationships" },
                { "title": "Women Dealing with Financial Abuse", "value": "Women Dealing with Financial Abuse" },
                { "title": "Women with Controlling Partners", "value": "Women with Controlling Partners" },
                { "title": "Women Feeling Isolated in Marriage", "value": "Women Feeling Isolated in Marriage" },
                { "title": "Women Struggling with Anxiety", "value": "Women Struggling with Anxiety" },
                { "title": "Women Who Fear Emotional Intimacy", "value": "Women Who Fear Emotional Intimacy" },
                { "title": "Women Living with Chronic Illness", "value": "Women Living with Chronic Illness" },
                { "title": "Women Struggling with Overwhelming Expectations", "value": "Women Struggling with Overwhelming Expectations" },
                { "title": "Women Going Through Major Life Transitions", "value": "Women Going Through Major Life Transitions" },
                { "title": "Women Feeling Inadequate in Relationships", "value": "Women Feeling Inadequate in Relationships" },
                { "title": "Women with a Fear of Abandonment", "value": "Women with a Fear of Abandonment" },
                { "title": "Women Seeking Love After Trauma", "value": "Women Seeking Love After Trauma" },
                { "title": "Women Who've Experienced Emotional Neglect", "value": "Women Who've Experienced Emotional Neglect" },
                { "title": "Women Experiencing Depression", "value": "Women Experiencing Depression" },
                { "title": "Women Feeling Overwhelmed by Parenthood", "value": "Women Feeling Overwhelmed by Parenthood" },
                { "title": "Women Struggling to Find Fulfillment in Life", "value": "Women Struggling to Find Fulfillment in Life" }
            ]);
        });
    },

    getSymptoms() {
        return new Promise((resolve) => {
            resolve([
                { "title": "Self-Sabotage in Relationships", "value": "Self-Sabotage in Relationships" },
                { "title": "People-Pleasing Behaviors", "value": "People-Pleasing Behaviors" },
                { "title": "Fear of Intimacy", "value": "Fear of Intimacy" },
                { "title": "Avoiding Conflict at All Costs", "value": "Avoiding Conflict at All Costs" },
                { "title": "Constant Overthinking", "value": "Constant Overthinking" },
                { "title": "Inability to Set Boundaries", "value": "Inability to Set Boundaries" },
                { "title": "Fear of Being Alone", "value": "Fear of Being Alone" },
                { "title": "Comparing Yourself to Others", "value": "Comparing Yourself to Others" },
                { "title": "Emotional Numbing", "value": "Emotional Numbing" },
                { "title": "Reliving Past Relationships", "value": "Reliving Past Relationships" },
                { "title": "Feeling Overwhelmed by Emotions", "value": "Feeling Overwhelmed by Emotions" },
                { "title": "Difficulty Trusting Partners", "value": "Difficulty Trusting Partners" },
                { "title": "Avoiding Vulnerability", "value": "Avoiding Vulnerability" },
                { "title": "Pushing Away Love", "value": "Pushing Away Love" },
                { "title": "Over-Attachment to Partners", "value": "Over-Attachment to Partners" },
                { "title": "Constant Need for Reassurance", "value": "Constant Need for Reassurance" },
                { "title": "Feeling Unworthy of Love", "value": "Feeling Unworthy of Love" },
                { "title": "Sabotaging Healthy Relationships", "value": "Sabotaging Healthy Relationships" },
                { "title": "Fear of Abandonment", "value": "Fear of Abandonment" },
                { "title": "Struggling to Communicate Needs", "value": "Struggling to Communicate Needs" },
                { "title": "Feelings of Hopelessness", "value": "Feelings of Hopelessness" },
                { "title": "Difficulty Letting Go of the Past", "value": "Difficulty Letting Go of the Past" },
                { "title": "Low Self-Esteem", "value": "Low Self-Esteem" },
                { "title": "Feeling Emotionally Exhausted", "value": "Feeling Emotionally Exhausted" },
                { "title": "Doubting Your Self-Worth", "value": "Doubting Your Self-Worth" },
                { "title": "Emotional Withdrawal from Partners", "value": "Emotional Withdrawal from Partners" },
                { "title": "Clinging to Unhealthy Relationships", "value": "Clinging to Unhealthy Relationships" },
                { "title": "Overanalyzing Every Interaction", "value": "Overanalyzing Every Interaction" },
                { "title": "Feeling Like a Burden", "value": "Feeling Like a Burden" },
                { "title": "Fear of Confrontation", "value": "Fear of Confrontation" },
                { "title": "Inability to Express Feelings", "value": "Inability to Express Feelings" },
                { "title": "Fear of Being Vulnerable", "value": "Fear of Being Vulnerable" },
                { "title": "Obsessing Over Perceived Flaws", "value": "Obsessing Over Perceived Flaws" },
                { "title": "Feeling Overwhelmed by Loneliness", "value": "Feeling Overwhelmed by Loneliness" },
                { "title": "Self-Isolation", "value": "Self-Isolation" },
                { "title": "Fear of Rejection", "value": "Fear of Rejection" },
                { "title": "Avoiding Deep Connections", "value": "Avoiding Deep Connections" },
                { "title": "Constant Fear of Being Hurt", "value": "Constant Fear of Being Hurt" },
                { "title": "Shutting Down Emotionally", "value": "Shutting Down Emotionally" },
                { "title": "Feeling Overwhelmed by Decision-Making", "value": "Feeling Overwhelmed by Decision-Making" },
                { "title": "Seeking External Validation", "value": "Seeking External Validation" },
                { "title": "Emotional Insecurity", "value": "Emotional Insecurity" },
                { "title": "Difficulty Forgiving Yourself", "value": "Difficulty Forgiving Yourself" },
                { "title": "Being Overly Critical of Yourself", "value": "Being Overly Critical of Yourself" },
                { "title": "Ruminating on Past Mistakes", "value": "Ruminating on Past Mistakes" },
                { "title": "Difficulty Feeling Content", "value": "Difficulty Feeling Content" },
                { "title": "Feeling Unworthy of Happiness", "value": "Feeling Unworthy of Happiness" },
                { "title": "Fear of Expressing Needs", "value": "Fear of Expressing Needs" },
                { "title": "Internalizing Others' Expectations", "value": "Internalizing Others' Expectations" },
                { "title": "Overworking to Prove Your Worth", "value": "Overworking to Prove Your Worth" }
            ]);
        });
    },

    getChallenges() {
        return new Promise((resolve) => {
            resolve([
                {
                    "title": "Carrying the Weight of Past Relationships",
                    "value": "Carrying the Weight of Past Relationships: You might find yourself replaying old hurts and disappointments, unable to fully trust new partners because of past betrayals. This emotional baggage can lead to fear of vulnerability, making it difficult to open up and connect on a deep level."
                },
                {
                    "title": "Unresolved Pain Leading to Self-Sabotage",
                    "value": "Unresolved Pain Leading to Self-Sabotage: Perhaps you notice patterns where things start off well, but then you or your partner do something to undermine the relationship. This self-sabotage often stems from unhealed emotional wounds, causing you to push love away even when you crave it."
                },
                {
                    "title": "Feeling Stuck in a Cycle of Guilt and Shame",
                    "value": "Feeling Stuck in a Cycle of Guilt and Shame: Many women carry a deep sense of guilt or shame related to past experiences—whether from a relationship that didn’t work out, mistakes they believe they made, or societal pressures. This can manifest as low self-esteem, making it hard to believe you deserve a loving, fulfilling relationship."
                },
                {
                    "title": "Attracting the Wrong Partners Repeatedly",
                    "value": "Attracting the Wrong Partners Repeatedly: You may find yourself drawn to the same types of partners—emotionally unavailable, controlling, or otherwise incompatible—over and over again. This pattern can be incredibly frustrating, leading to a sense of hopelessness and questioning if you’ll ever find the right match."
                },
                {
                    "title": "Fear of Abandonment or Rejection",
                    "value": "Fear of Abandonment or Rejection: If you’ve experienced past rejection or abandonment, it’s common to develop a fear of these happening again. This fear might cause you to cling too tightly to partners, or conversely, push them away preemptively to avoid getting hurt."
                },
                {
                    "title": "Difficulty Establishing Healthy Boundaries",
                    "value": "Difficulty Establishing Healthy Boundaries: Without understanding your attachment style, you might struggle with setting and maintaining boundaries in your relationships. This can lead to unhealthy dynamics, where you either overextend yourself or feel taken advantage of, leaving you emotionally drained."
                },
                {
                    "title": "Struggling to Find or Keep Quality Partners",
                    "value": "Struggling to Find or Keep Quality Partners: Despite your best efforts, you may find it difficult to meet or maintain relationships with partners who are truly compatible. This can lead to frustration and self-doubt, as you wonder why you can’t seem to attract the kind of love you desire."
                },
                {
                    "title": "Doubting Your Worthiness for True Love",
                    "value": "Doubting Your Worthiness for True Love: After repeated disappointments, it’s easy to start questioning whether you deserve the love you’re seeking. This doubt can create a self-fulfilling prophecy, where your fear of not being good enough prevents you from fully engaging with potential partners."
                },
                {
                    "title": "Feeling Overwhelmed by the Dating World",
                    "value": "Feeling Overwhelmed by the Dating World: Navigating modern dating can be overwhelming, especially with the pressures of online dating, societal expectations, and the fear of rejection. You might feel lost, unsure of how to present yourself or where to find the right person."
                }
            ]);
        });
    },

    getInstructions() {
        return new Promise((resolve) => {
            resolve([
                {
                    title: 'Instagram Series 3',
                    value: `Prompt for Instagram Carousel Post Creation:

You are tasked with creating a highly engaging Instagram carousel post series that dives deep into an emotional, relational, or personal growth topic. The tone should be empathetic, insightful, and empowering. Your audience craves connection, authenticity, and the wisdom that helps them grow emotionally and spiritually. They are familiar with the deeper emotional dynamics between men and women, and they want to explore complex, healing-based topics that resonate with their experiences.

The goal is to create a series of messages in the tone of a trusted friend, that concludes by informing the reader of my "7-Day Conscious Love Challenge" and invites engagement, asking readers to leave a specific comment "CHALLENGE" for more information. 

THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.

The content follows a structured emotional journey that taps into self-reflection, vulnerability, and relational dynamics. The statements are meant to evoke a sense of understanding and empathy, leading the audience through a narrative that challenges common assumptions and behaviors. Here's the breakdown of the structure:

### 1. **Challenge to Social Conditioning**
- **Purpose:** The content begins by questioning ingrained societal beliefs, addressing a false sense of responsibility imposed on women, and building recognition of this pattern.

### 2. **Reframing Expectations**
- **Purpose:** It shifts the focus to challenge unhealthy expectations of women and refocuses the problem on masculine insecurity, giving a deeper context for the readers to reflect on.

### 3. **Conditional Nature of Feminine Expression**
- **Purpose:** Introduces the idea that a woman's softness and vulnerability are responses to safety, which men are expected to foster. It sets the stage for mutual responsibility in relationships.

### 4. **Consequences of Lack of Safety**
- **Purpose:** Explains the defensive mechanisms women adopt in unsafe environments, leading to a shift into masculine energy. It helps the reader understand the cause-and-effect dynamics.

### 5. **Critique of Male Expectations**
- **Purpose:** Addresses the harmful nature of men’s entitlement to female softness, framing it as an assault on a woman’s right to protect herself and maintain her autonomy.

### 6. **Reflection and Call to Action for Men**
- **Purpose:** The content shifts to men, encouraging introspection by framing their discomfort and inadequacies as growth opportunities rather than something to be blamed on women.

### 7. **Acknowledgement of Women’s Wounding**
- **Purpose:** Balances the narrative by acknowledging that some women, due to past trauma, also stay in their masculine energy and may repel healthy male figures. It calls for healing on both sides.

### 8. **Common Root Cause: Fear of Vulnerability**
- **Purpose:** The narrative converges on a shared human experience—avoiding vulnerability. This universal truth serves to unite both men and women in their struggles.

### 9. **The Pain of Intimacy and Growth**
- **Purpose:** Reinforces that true intimacy requires discomfort and pain, but facing it is the only path to conscious love. This section is designed to provoke a sense of acceptance around vulnerability.

### 10. **End with Hope and a Call to Action:**
- Inspire the reader by offering a positive vision of the future, where they attract healthier more connected relationships by embodying these lessons
- Close by informing the reader that we're starting a "7-Day Conscious Love Challenge" soon and transition to a direct invitation to comment "CHALLENGE" for more information about the challenge.
- THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.

This structure creates a space for the audience to feel understood, challenges their assumptions, and then guides them toward introspection and change. For more content, you could apply this same framework to different relational or social dynamics—continuing to validate experiences while offering deeper insight and a solution path.

Only respond with the slide content - one per line

NO need for titles, formatting, or slide numbers`
                },
                {
                    title: 'Instagram Series 2',
                    value: `Prompt for Instagram Carousel Post Creation:

You are tasked with creating a highly engaging Instagram carousel post series that dives deep into an emotional, relational, or personal growth topic. The tone should be empathetic, insightful, and empowering. Your audience craves connection, authenticity, and the wisdom that helps them grow emotionally and spiritually. They are familiar with the deeper emotional dynamics between men and women, and they want to explore complex, healing-based topics that resonate with their experiences.

The goal is to create a series of messages in the tone of a trusted friend, that concludes by informing the reader of my "7-Day Conscious Love Challenge" and invites engagement, asking readers to leave a specific comment "CHALLENGE" for more information. 

THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.

The content follows a specific emotional and logical structure designed to resonate with its audience, particularly women reflecting on their relationships and personal worth. It uses a pattern of statements that lead from recognition of pain points, through empowerment, to an invitation for action. 

Follow this structure for creating the content:

1. **Opening Statement - Challenging a Common Belief:**
- Start by presenting a bold, counter-cultural claim that challenges conventional beliefs or behaviors (e.g., "Women should never chase men in dating").
- This captures attention and resonates with the reader’s desire for clarity or validation.

2. **Identify the Problem:**
- Define the issue in emotional and relational terms that the reader may identify with (e.g., "It goes against the natural order... it is an attack on her worthiness").
- Create a sense of understanding about why this behavior or belief is harmful, often addressing inner conflict or societal conditioning.

3. **Highlight the Negative Impact:**
- Outline how the problem affects the individual, both externally (e.g., relationship dynamics) and internally (e.g., disconnection from intuition, self-worth).

4. **Introduce the Opposite Side - The Ideal Behavior or Dynamic:**
- Provide a clear contrast by introducing the desired or healthier alternative (e.g., "A man's primary responsibility... is to create safety").
- Frame this in a way that emphasizes the empowerment of the audience, connecting the alternative behavior to their worth or values.

5. **Define the Roles:**
- Clearly delineate masculine and feminine roles or characteristics, focusing on how a balanced dynamic should look (e.g., "The empowered feminine never allows herself to be used to validate someone's ego").

6. **Reveal the Internal Block or Scarcity Mindset:**
- Explore how cultural or societal pressures have led the reader to undervalue themselves, or how internal wounds create dysfunctional behaviors (e.g., "The wounded feminine abandons herself in the hope of being chosen").
- This evokes introspection.

7. **Expose the Negative Cycle:**
- Describe the consequences of staying in this wounded or disempowered state, making it clear how it leads to further harm or perpetuates negative cycles in relationships (e.g., "He has no respect for her, and soon it will take more than her...").

8. **Empowerment Through Boundaries:**
- Emphasize the importance of setting boundaries or creating resistance in relationships, which shows personal strength and reinforces self-worth (e.g., "A healthy masculine partner wants to feel some resistance in relationship").
- This offers practical advice while validating the reader's feelings.

9. **Acknowledge External Challenges:**
- Recognize societal or relational pressures that have made it hard for the reader to embrace their strength (e.g., "Weaker men have judged and mocked her strength").
- Create a sense of solidarity by acknowledging the difficulties of standing in one’s truth.

10. **Ultimate Lesson - Independence and Self-Worth:**
- Present a key takeaway that reinforces the reader’s self-worth independent of external validation (e.g., "The greatest thing she can ever learn is that she doesn't need a man").
- Frame this as an ongoing personal journey that requires patience and self-trust.

11. **End with Hope and a Call to Action:**
- Inspire the reader by offering a positive vision of the future, where they attract healthier dynamics by embodying these lessons
- Close with a direct invitation to engage further, inform the reader of our "7-Day Conscious Love Challenge" and invites engagement as an extension of the slide contents, asking readers to comment "CHALLENGE" for more information. THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.
- Example: *“Im leading a 7-Day Conscious Love Challenge where I will guide you in the essential healing practices that empower the feminine and deepen the masculine allowing you to continually open yourself in partnership and create conscious love. Drop the word CHALLENGE in the comments and I'l send you the details.”*

**To replicate this content:**

- Start by tapping into common, relatable struggles or misconceptions.
- Guide the reader through an emotional progression: **problem → disempowerment → awareness → empowerment**.
- Anchor each key point with a strong contrast between a "wounded" or unhealthy version and an "empowered" or ideal version.
- Close with a practical step that helps the reader take action, solidifying their progress.

Only respond with the slide content - one per line

NO need for titles OR, formatting`
                },
                {
                    title: 'Instagram Series 1',
                    value: `Prompt for Instagram Carousel Post Creation:

You are tasked with creating a highly engaging Instagram carousel post series that dives deep into an emotional, relational, or personal growth topic. The tone should be empathetic, insightful, and empowering. Your audience craves connection, authenticity, and the wisdom that helps them grow emotionally and spiritually. They are familiar with the deeper emotional dynamics between men and women, and they want to explore complex, healing-based topics that resonate with their experiences.

The goal is to create a series of messages in the tone of a trusted friend, that concludes by informing the reader of my "7-Day Conscious Love Challenge" and invites engagement, asking readers to leave a specific comment "CHALLENGE" for more information. 

THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.

Start with a general observation of a symptom related to the topic through the lens of emotional healing, then take the reader on a journey of self-discovery or relational insights, and end with a call to action (CTA) that invites them to join the challenge.

Each slide is written in the third person perspective of women or the feminine nature, exactly three sentences in paragraph form. Limited to a 8th grade reading level.

If a topic is addressing men, it should be as advise to women to support, communicate, or connect with their men. THE AUDIENCE IS EXCLUSIVELY WOMEN.

### Structure for Response Format (10-slide carousel):

1. Provocation of Problem (Slide 1):
- Provoke introspection related to the topic by declaring a statement of observation related to internal state.
- Example: *“Many women feel like relationships lose their spark even when both partners care deeply.”*

2. Acknowledging the Problem (Slide 2):
- Describe the emotional or relational issue clearly.
- Example: *“It’s not about love fading. It’s about disconnection, routines, and unhealed wounds keeping us apart.”*

3. Exploring the Underlying Causes (Slide 3):
- Introduce the root causes, focusing on the relational dynamics between the feminine and masculine.
- Example: *“Often, women seek emotional depth, while men focus on external needs. This mismatch creates tension, not intimacy.”*

4. Feminine Perspective (Slide 4):
- Dive deeper into the emotional needs and journey of the feminine, using a compassionate tone.
- Example: *“The feminine craves depth, safety, and emotional presence. When she doesn’t get this, she feels unseen and unheard.”*

5. Masculine Perspective (Slide 5):
- Offer insights into the masculine journey, framing it in a way that creates understanding and empathy.
- Example: *“The masculine, on the other hand, is wired to protect and provide. He may feel like he’s doing his part, but emotional presence is where the gap lies.”*

6. Identify the Breakdown (Slide 6):
- Explain how the misalignment in these needs leads to relational struggles.
- Example: *“When both partners focus only on what’s missing, intimacy dies, and the relationship begins to feel like a transactional exchange.”*

7. Solution (Slide 7):
- Offer an actionable insight or solution, focusing on healing or growth.
- Example: *“The way forward is through mutual vulnerability. The feminine leads with her heart, and the masculine follows with his presence.”*

8. Empowerment for Women (Slide 8):
- Speak directly to the feminine, empowering her to reclaim her truth and boundaries.
- Example: *“Ladies, your softness is a gift—but only when shared with someone who makes you feel safe. You deserve a love that honors your worth.”*

9. Call to Action (Slide 9):
- End with a CTA that informs the reader of a solution my "7-Day Conscious Love Challenge" and invites engagement as an extension of the slide contents, asking readers to comment "CHALLENGE" for more information. THE NAME OF THE PROGRAM AND THE COMMENT TRIGGER NEED TO MATCH EXACTLY DO NOT CHANGE THEM AT ALL.
- Example: *“Im leading a 7-Day Conscious Love Challenge where I will guide you in the essential healing practices that empower the feminine and deepen the masculine allowing you to continually open yourself in partnership and create conscious love. Drop the word CHALLENGE in the comments and I'l send you the details.”*

10. Encouragement and reiterating call to action.
- optional steps should add additional context to the call to action through encouragement and hope.

Follow this structure to create a 10-slide carousel that will drive engagement and inspire meaningful interaction and curiosity.

Only respond with the slide content - one per line

NO need for titles OR, formatting
`
                },
                {
                    title: 'Long form w/worksheet', value: `Write a long form AIDA article in the style of the Atlantic. Start by identifying the problem and the reader’s pain points. Amplify the emotional and practical consequences of not solving the issue. Then, introduce a metaphor that mirrors the reader’s situation, subtly presenting the advice through this example. Transition smoothly into showing how solving the problem will lead to a powerful transformation. Once the benefits and changes are clear, present the invitation — a worksheet directly related to the advice — as the solution. Finally, end with a direct call to action.`
                }
            ]);
        });
    }
};
