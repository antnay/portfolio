<script lang="ts">
  import ProjectCard from '$lib/components/project-card/ProjectCard.svelte';
</script>

<div>
  <div class="m-4 flex flex-col flex-wrap max-h-screen max-w-fit gap-2">
    <ProjectCard
      project="WorksheetIQ"
      description="Website for University of Washington Tacoma student facilitators to find, 
        create, and share worksheets."
      github="https://github.com/TechStartupClub/TypeSheet"
      link=""
      stack={['Go', 'Node.js', 'Python', 'React', 'PostgreSQL', 's3', 'OAuth']}
    />
    <ProjectCard
      project="UMarket"
      description="A social and marketplace platform designed for 
        university students to buy, sell, and trade wares safely and efficiently."
      github="https://github.com/TechStartupClub/UMarket"
      link="https://github.com/TechStartupClub/UMarket"
      stack={['Typescript', 'Node.js', 'React', 'PostgreSQL', 'SupaBase', 'OAuth']}
    />
    <ProjectCard
      project="UHealth"
      description="A diagnostic tool using machine learning to
        analyze chest X-ray images and identify various respiratory illnesses."
      link=""
      github="https://github.com/NickJordan-BE/UHealth"
      stack={['Python', 'Flask', 'Tensorflow', 'Streamlit', 'PostgreSQL', 'SupaBase']}
    />
    <ProjectCard
      project="Session"
      description="A tmux session management tool built with fzf integration, 
        allowing users to quickly create, switch between, and organize multiple
        tmux sessions for improved workflow and productivity."
      link=""
      github="https://github.com/antnay/session"
      stack={['Rust']}
    />
    <ProjectCard
      project="Portfolio"
      description="A portfolio website showcasing my software development projects,
        technical skills, and professional experience."
      github="https://github.com/antnay/portfolio"
      link=""
      stack={['Svelte']}
    />
    <ProjectCard
      project="MyMaps"
      description="An interactive IOS application that integrates with Google My Maps, 
        enabling users to create and edit detailed maps with custom markers,
        routes, and geographic data for travel planning, business locations, or educational purposes."
      github="https://github.com/antnay/MyMaps"
      link=""
      stack={['Swift']}
    />
    <ProjectCard
      project="FileWatcher"
      description="A system monitoring utility that continuously tracks file system
        changes, detecting modifications, creations, and deletions in specified directories"
      github="https://github.com/antnay/FileWatcher"
      link=""
      stack={['Java', 'SQLite', 'Gmail']}
    />
  </div>
</div>
