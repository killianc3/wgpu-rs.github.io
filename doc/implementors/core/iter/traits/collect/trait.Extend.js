(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;T, const CAP:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt;","synthetic":false,"types":["arrayvec::arrayvec::ArrayVec"]}];
implementors["bit_set"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"bit_set/struct.BitSet.html\" title=\"struct bit_set::BitSet\">BitSet</a>&lt;B&gt;","synthetic":false,"types":["bit_set::BitSet"]}];
implementors["bit_vec"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"bit_vec/struct.BitVec.html\" title=\"struct bit_vec::BitVec\">BitVec</a>&lt;B&gt;","synthetic":false,"types":["bit_vec::BitVec"]}];
implementors["gpu_alloc"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gpu_alloc/struct.UsageFlags.html\" title=\"struct gpu_alloc::UsageFlags\">UsageFlags</a>&gt; for <a class=\"struct\" href=\"gpu_alloc/struct.UsageFlags.html\" title=\"struct gpu_alloc::UsageFlags\">UsageFlags</a>","synthetic":false,"types":["gpu_alloc::usage::UsageFlags"]}];
implementors["gpu_alloc_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gpu_alloc_types/struct.AllocationFlags.html\" title=\"struct gpu_alloc_types::AllocationFlags\">AllocationFlags</a>&gt; for <a class=\"struct\" href=\"gpu_alloc_types/struct.AllocationFlags.html\" title=\"struct gpu_alloc_types::AllocationFlags\">AllocationFlags</a>","synthetic":false,"types":["gpu_alloc_types::device::AllocationFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gpu_alloc_types/struct.MemoryPropertyFlags.html\" title=\"struct gpu_alloc_types::MemoryPropertyFlags\">MemoryPropertyFlags</a>&gt; for <a class=\"struct\" href=\"gpu_alloc_types/struct.MemoryPropertyFlags.html\" title=\"struct gpu_alloc_types::MemoryPropertyFlags\">MemoryPropertyFlags</a>","synthetic":false,"types":["gpu_alloc_types::types::MemoryPropertyFlags"]}];
implementors["gpu_descriptor"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gpu_descriptor/struct.DescriptorSetLayoutCreateFlags.html\" title=\"struct gpu_descriptor::DescriptorSetLayoutCreateFlags\">DescriptorSetLayoutCreateFlags</a>&gt; for <a class=\"struct\" href=\"gpu_descriptor/struct.DescriptorSetLayoutCreateFlags.html\" title=\"struct gpu_descriptor::DescriptorSetLayoutCreateFlags\">DescriptorSetLayoutCreateFlags</a>","synthetic":false,"types":["gpu_descriptor::allocator::DescriptorSetLayoutCreateFlags"]}];
implementors["gpu_descriptor_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"gpu_descriptor_types/struct.DescriptorPoolCreateFlags.html\" title=\"struct gpu_descriptor_types::DescriptorPoolCreateFlags\">DescriptorPoolCreateFlags</a>&gt; for <a class=\"struct\" href=\"gpu_descriptor_types/struct.DescriptorPoolCreateFlags.html\" title=\"struct gpu_descriptor_types::DescriptorPoolCreateFlags\">DescriptorPoolCreateFlags</a>","synthetic":false,"types":["gpu_descriptor_types::types::DescriptorPoolCreateFlags"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(</a>K, V<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>V<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>K, V<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::map::IndexMap"]},{"text":"impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>V<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::map::IndexMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
implementors["naga"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/back/glsl/struct.Features.html\" title=\"struct naga::back::glsl::Features\">Features</a>&gt; for <a class=\"struct\" href=\"naga/back/glsl/struct.Features.html\" title=\"struct naga::back::glsl::Features\">Features</a>","synthetic":false,"types":["naga::back::glsl::features::Features"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/back/glsl/struct.WriterFlags.html\" title=\"struct naga::back::glsl::WriterFlags\">WriterFlags</a>&gt; for <a class=\"struct\" href=\"naga/back/glsl/struct.WriterFlags.html\" title=\"struct naga::back::glsl::WriterFlags\">WriterFlags</a>","synthetic":false,"types":["naga::back::glsl::WriterFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/back/spv/struct.ImageTypeFlags.html\" title=\"struct naga::back::spv::ImageTypeFlags\">ImageTypeFlags</a>&gt; for <a class=\"struct\" href=\"naga/back/spv/struct.ImageTypeFlags.html\" title=\"struct naga::back::spv::ImageTypeFlags\">ImageTypeFlags</a>","synthetic":false,"types":["naga::back::spv::ImageTypeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/back/spv/struct.WriterFlags.html\" title=\"struct naga::back::spv::WriterFlags\">WriterFlags</a>&gt; for <a class=\"struct\" href=\"naga/back/spv/struct.WriterFlags.html\" title=\"struct naga::back::spv::WriterFlags\">WriterFlags</a>","synthetic":false,"types":["naga::back::spv::WriterFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.UniformityRequirements.html\" title=\"struct naga::valid::UniformityRequirements\">UniformityRequirements</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.UniformityRequirements.html\" title=\"struct naga::valid::UniformityRequirements\">UniformityRequirements</a>","synthetic":false,"types":["naga::valid::analyzer::UniformityRequirements"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.GlobalUse.html\" title=\"struct naga::valid::GlobalUse\">GlobalUse</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.GlobalUse.html\" title=\"struct naga::valid::GlobalUse\">GlobalUse</a>","synthetic":false,"types":["naga::valid::analyzer::GlobalUse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.TypeFlags.html\" title=\"struct naga::valid::TypeFlags\">TypeFlags</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.TypeFlags.html\" title=\"struct naga::valid::TypeFlags\">TypeFlags</a>","synthetic":false,"types":["naga::valid::type::TypeFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.ValidationFlags.html\" title=\"struct naga::valid::ValidationFlags\">ValidationFlags</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.ValidationFlags.html\" title=\"struct naga::valid::ValidationFlags\">ValidationFlags</a>","synthetic":false,"types":["naga::valid::ValidationFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.Capabilities.html\" title=\"struct naga::valid::Capabilities\">Capabilities</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.Capabilities.html\" title=\"struct naga::valid::Capabilities\">Capabilities</a>","synthetic":false,"types":["naga::valid::Capabilities"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/valid/struct.ShaderStages.html\" title=\"struct naga::valid::ShaderStages\">ShaderStages</a>&gt; for <a class=\"struct\" href=\"naga/valid/struct.ShaderStages.html\" title=\"struct naga::valid::ShaderStages\">ShaderStages</a>","synthetic":false,"types":["naga::valid::ShaderStages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/struct.StorageAccess.html\" title=\"struct naga::StorageAccess\">StorageAccess</a>&gt; for <a class=\"struct\" href=\"naga/struct.StorageAccess.html\" title=\"struct naga::StorageAccess\">StorageAccess</a>","synthetic":false,"types":["naga::StorageAccess"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"naga/struct.Barrier.html\" title=\"struct naga::Barrier\">Barrier</a>&gt; for <a class=\"struct\" href=\"naga/struct.Barrier.html\" title=\"struct naga::Barrier\">Barrier</a>","synthetic":false,"types":["naga::Barrier"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["spirv"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.ImageOperands.html\" title=\"struct spirv::ImageOperands\">ImageOperands</a>&gt; for <a class=\"struct\" href=\"spirv/struct.ImageOperands.html\" title=\"struct spirv::ImageOperands\">ImageOperands</a>","synthetic":false,"types":["spirv::ImageOperands"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.FPFastMathMode.html\" title=\"struct spirv::FPFastMathMode\">FPFastMathMode</a>&gt; for <a class=\"struct\" href=\"spirv/struct.FPFastMathMode.html\" title=\"struct spirv::FPFastMathMode\">FPFastMathMode</a>","synthetic":false,"types":["spirv::FPFastMathMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.SelectionControl.html\" title=\"struct spirv::SelectionControl\">SelectionControl</a>&gt; for <a class=\"struct\" href=\"spirv/struct.SelectionControl.html\" title=\"struct spirv::SelectionControl\">SelectionControl</a>","synthetic":false,"types":["spirv::SelectionControl"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.LoopControl.html\" title=\"struct spirv::LoopControl\">LoopControl</a>&gt; for <a class=\"struct\" href=\"spirv/struct.LoopControl.html\" title=\"struct spirv::LoopControl\">LoopControl</a>","synthetic":false,"types":["spirv::LoopControl"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.FunctionControl.html\" title=\"struct spirv::FunctionControl\">FunctionControl</a>&gt; for <a class=\"struct\" href=\"spirv/struct.FunctionControl.html\" title=\"struct spirv::FunctionControl\">FunctionControl</a>","synthetic":false,"types":["spirv::FunctionControl"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.MemorySemantics.html\" title=\"struct spirv::MemorySemantics\">MemorySemantics</a>&gt; for <a class=\"struct\" href=\"spirv/struct.MemorySemantics.html\" title=\"struct spirv::MemorySemantics\">MemorySemantics</a>","synthetic":false,"types":["spirv::MemorySemantics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.MemoryAccess.html\" title=\"struct spirv::MemoryAccess\">MemoryAccess</a>&gt; for <a class=\"struct\" href=\"spirv/struct.MemoryAccess.html\" title=\"struct spirv::MemoryAccess\">MemoryAccess</a>","synthetic":false,"types":["spirv::MemoryAccess"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.KernelProfilingInfo.html\" title=\"struct spirv::KernelProfilingInfo\">KernelProfilingInfo</a>&gt; for <a class=\"struct\" href=\"spirv/struct.KernelProfilingInfo.html\" title=\"struct spirv::KernelProfilingInfo\">KernelProfilingInfo</a>","synthetic":false,"types":["spirv::KernelProfilingInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.RayFlags.html\" title=\"struct spirv::RayFlags\">RayFlags</a>&gt; for <a class=\"struct\" href=\"spirv/struct.RayFlags.html\" title=\"struct spirv::RayFlags\">RayFlags</a>","synthetic":false,"types":["spirv::RayFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"spirv/struct.FragmentShadingRate.html\" title=\"struct spirv::FragmentShadingRate\">FragmentShadingRate</a>&gt; for <a class=\"struct\" href=\"spirv/struct.FragmentShadingRate.html\" title=\"struct spirv::FragmentShadingRate\">FragmentShadingRate</a>","synthetic":false,"types":["spirv::FragmentShadingRate"]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"syn/punctuated/enum.Pair.html\" title=\"enum syn::punctuated::Pair\">Pair</a>&lt;T, P&gt;&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>&gt; for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>","synthetic":false,"types":["syn::error::Error"]}];
implementors["wgpu_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_core/pipeline/struct.PipelineFlags.html\" title=\"struct wgpu_core::pipeline::PipelineFlags\">PipelineFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.PipelineFlags.html\" title=\"struct wgpu_core::pipeline::PipelineFlags\">PipelineFlags</a>","synthetic":false,"types":["wgpu_core::pipeline::PipelineFlags"]}];
implementors["wgpu_hal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.UpdateAfterBindTypes.html\" title=\"struct wgpu_hal::UpdateAfterBindTypes\">UpdateAfterBindTypes</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.UpdateAfterBindTypes.html\" title=\"struct wgpu_hal::UpdateAfterBindTypes\">UpdateAfterBindTypes</a>","synthetic":false,"types":["wgpu_hal::vulkan::UpdateAfterBindTypes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.InstanceFlags.html\" title=\"struct wgpu_hal::InstanceFlags\">InstanceFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.InstanceFlags.html\" title=\"struct wgpu_hal::InstanceFlags\">InstanceFlags</a>","synthetic":false,"types":["wgpu_hal::InstanceFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.PipelineLayoutFlags.html\" title=\"struct wgpu_hal::PipelineLayoutFlags\">PipelineLayoutFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.PipelineLayoutFlags.html\" title=\"struct wgpu_hal::PipelineLayoutFlags\">PipelineLayoutFlags</a>","synthetic":false,"types":["wgpu_hal::PipelineLayoutFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.BindGroupLayoutFlags.html\" title=\"struct wgpu_hal::BindGroupLayoutFlags\">BindGroupLayoutFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.BindGroupLayoutFlags.html\" title=\"struct wgpu_hal::BindGroupLayoutFlags\">BindGroupLayoutFlags</a>","synthetic":false,"types":["wgpu_hal::BindGroupLayoutFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.TextureFormatCapabilities.html\" title=\"struct wgpu_hal::TextureFormatCapabilities\">TextureFormatCapabilities</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.TextureFormatCapabilities.html\" title=\"struct wgpu_hal::TextureFormatCapabilities\">TextureFormatCapabilities</a>","synthetic":false,"types":["wgpu_hal::TextureFormatCapabilities"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.FormatAspects.html\" title=\"struct wgpu_hal::FormatAspects\">FormatAspects</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.FormatAspects.html\" title=\"struct wgpu_hal::FormatAspects\">FormatAspects</a>","synthetic":false,"types":["wgpu_hal::FormatAspects"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.MemoryFlags.html\" title=\"struct wgpu_hal::MemoryFlags\">MemoryFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.MemoryFlags.html\" title=\"struct wgpu_hal::MemoryFlags\">MemoryFlags</a>","synthetic":false,"types":["wgpu_hal::MemoryFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.AttachmentOps.html\" title=\"struct wgpu_hal::AttachmentOps\">AttachmentOps</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.AttachmentOps.html\" title=\"struct wgpu_hal::AttachmentOps\">AttachmentOps</a>","synthetic":false,"types":["wgpu_hal::AttachmentOps"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.BufferUses.html\" title=\"struct wgpu_hal::BufferUses\">BufferUses</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.BufferUses.html\" title=\"struct wgpu_hal::BufferUses\">BufferUses</a>","synthetic":false,"types":["wgpu_hal::BufferUses"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_hal/struct.TextureUses.html\" title=\"struct wgpu_hal::TextureUses\">TextureUses</a>&gt; for <a class=\"struct\" href=\"wgpu_hal/struct.TextureUses.html\" title=\"struct wgpu_hal::TextureUses\">TextureUses</a>","synthetic":false,"types":["wgpu_hal::TextureUses"]}];
implementors["wgpu_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.Backends.html\" title=\"struct wgpu_types::Backends\">Backends</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Backends.html\" title=\"struct wgpu_types::Backends\">Backends</a>","synthetic":false,"types":["wgpu_types::Backends"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.Features.html\" title=\"struct wgpu_types::Features\">Features</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Features.html\" title=\"struct wgpu_types::Features\">Features</a>","synthetic":false,"types":["wgpu_types::Features"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.DownlevelFlags.html\" title=\"struct wgpu_types::DownlevelFlags\">DownlevelFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DownlevelFlags.html\" title=\"struct wgpu_types::DownlevelFlags\">DownlevelFlags</a>","synthetic":false,"types":["wgpu_types::DownlevelFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.ShaderStages.html\" title=\"struct wgpu_types::ShaderStages\">ShaderStages</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ShaderStages.html\" title=\"struct wgpu_types::ShaderStages\">ShaderStages</a>","synthetic":false,"types":["wgpu_types::ShaderStages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.TextureFormatFeatureFlags.html\" title=\"struct wgpu_types::TextureFormatFeatureFlags\">TextureFormatFeatureFlags</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.TextureFormatFeatureFlags.html\" title=\"struct wgpu_types::TextureFormatFeatureFlags\">TextureFormatFeatureFlags</a>","synthetic":false,"types":["wgpu_types::TextureFormatFeatureFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.ColorWrites.html\" title=\"struct wgpu_types::ColorWrites\">ColorWrites</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ColorWrites.html\" title=\"struct wgpu_types::ColorWrites\">ColorWrites</a>","synthetic":false,"types":["wgpu_types::ColorWrites"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.BufferUsages.html\" title=\"struct wgpu_types::BufferUsages\">BufferUsages</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BufferUsages.html\" title=\"struct wgpu_types::BufferUsages\">BufferUsages</a>","synthetic":false,"types":["wgpu_types::BufferUsages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.TextureUsages.html\" title=\"struct wgpu_types::TextureUsages\">TextureUsages</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.TextureUsages.html\" title=\"struct wgpu_types::TextureUsages\">TextureUsages</a>","synthetic":false,"types":["wgpu_types::TextureUsages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.PipelineStatisticsTypes.html\" title=\"struct wgpu_types::PipelineStatisticsTypes\">PipelineStatisticsTypes</a>&gt; for <a class=\"struct\" href=\"wgpu_types/struct.PipelineStatisticsTypes.html\" title=\"struct wgpu_types::PipelineStatisticsTypes\">PipelineStatisticsTypes</a>","synthetic":false,"types":["wgpu_types::PipelineStatisticsTypes"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()