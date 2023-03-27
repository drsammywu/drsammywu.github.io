<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Sammy Wu is a current resident physican specializing in Physical Medicine and Rehabilitation (07/2021-06/2025). He received his M.D. with Distinction in Research in Clinical Investigation from Albert Einstein College of Medicine and a Bachelors of Science in Integrative Neuroscience from Binghamton University. In residency, he has had clinical experience at Columbia University Irving Medical Center, Weill Cornell Medical Center, Memorial Sloan Kettering Cancer Center, Hospital of Special Surgery, Blythedale Children\'s Hospital, Helen Hayes Hospital, and James J. Peters VA Medical Center.',
				},
				{
					id: 2,
					bio: ''
						// 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/Headshot.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
