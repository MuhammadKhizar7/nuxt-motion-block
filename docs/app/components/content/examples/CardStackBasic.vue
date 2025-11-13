<template>
  <div class="flex justify-center h-64">
    <MCardStack :items="[
      { id: 1, title: 'Project Alpha', content: 'A revolutionary new product that changes everything.', name: 'Alex Developer', designation: 'Lead Developer' },
      { id: 2, title: 'Project Beta', content: 'An innovative solution for modern businesses.', name: 'Sam Designer', designation: 'Senior Designer' },
      { id: 3, title: 'Project Gamma', content: 'A cutting-edge platform for the future.', name: 'Jordan Manager', designation: 'Project Manager' }
    ]" />
  </div>
</template>